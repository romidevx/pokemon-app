import React, { useEffect, useState } from 'react'
import '../sass/PokemonCard.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';

const PokemonCard = ({pokemon}) => {

  const {name} = pokemon
  const {setCurrentPokemon} = CustomPokemonsState();
  const [details,setDetails] = useState({});

  const showPokemonDetails = (name) => {
    setCurrentPokemon(name);
  }

  useEffect(() => {
      const fetchPokemonDetails = async() => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await response.json();
        //CREATE NEW POKEMON
        let pokemonInfo= {
          id:    data.id,
          name:  data.name,
          image: data.sprites.other.dream_world.front_default,
          type:  data.types[0].type.name
        }
        setDetails(pokemonInfo)
      }

    fetchPokemonDetails();
  },[name]);

  return (
    <div className="card" onClick={() => showPokemonDetails(details.name)}>
        <img src={details.image} alt={details.name} width='200'/>
        <h4>{details.name}</h4>

        <div className="info">
          <p>Type: {details.type}</p>
          <p>Id# {details.id}</p>
        </div>
    </div>
  )
}

export default PokemonCard