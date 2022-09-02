import '../sass/Pokemons.scss';
import { useEffect } from 'react';
// CONTEXT
import UsePokemonsContext from '../hooks/CustomPokemonsState';
//COMPONENTS
import Spinner from './Spinner';
import PokemonCard from './PokemonCard';

const Pokemons = () => {
  
  const {offset,limit, pokemonsUrls, loading, error,fetchPokemonsUrls} = UsePokemonsContext();
  useEffect(() => {
    fetchPokemonsUrls()
  },[offset,limit]);


  //ERROR MESSAGE
  if(error){
    return <h4 style={{textAlign:'center', paddingTop:'70px'}}>
    ... There was a problem fetching Pokemons ...<br/>
    ... Please try again later ...
    </h4>
  }

  //LOADING MESSAGE
  if(loading){
    return <Spinner/>
  }

  return (
    <section className='pokemons'>
      <div className="container">
        {
          pokemonsUrls && pokemonsUrls.map( (pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.url.split('/')[6]}/>
          ))
        }   
      </div>
    </section>
  )
}

export default Pokemons;