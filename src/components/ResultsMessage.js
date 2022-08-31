import React from 'react';
import '../sass/ResultsMessage.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';

const ResultsMessage = () => {
  const {limit} = CustomPokemonsState();
  return (
    <section className='ResultsMessage'>
      <div className="container">
        <p>Showing {limit} pokemons per page</p>
      </div>
    </section>
  )
}

export default ResultsMessage