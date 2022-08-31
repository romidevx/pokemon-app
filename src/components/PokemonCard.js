import React, { useEffect, useState } from 'react'
import '../sass/PokemonCard.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';

const PokemonCard = ({pokemon}) => {

  const {name} = pokemon
  const {toggleModal} = CustomPokemonsState();
  const [details,setDetails] = useState({})

  //console.log(props)

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

  useEffect(() => {
    fetchPokemonDetails()
  },[]);

  return (
    // <div className="card" onClick={() => fetchPokemonDetails(id)}>
    <div className="card" onClick={() => toggleModal()}>
        <img src={details.image} alt="" width='200'/>
        <h4>{details.name}</h4>

        <div className="info">
          <p>Type: {details.type}</p>
          <p>Id# {details.id}</p>
        </div>
    </div>
  )
}

export default PokemonCard