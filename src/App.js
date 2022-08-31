import React from 'react';

// COMPONENTS
import Navbar from './components/Navbar';
import ItemsPerPage from './components/ItemsPerPage';
import Pokemons from './components/Pokemons';
import Buttons from './components/Buttons';
import ResultsMessage from './components/ResultsMessage';
import Modal from './components/Modal';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemsPerPage/>
      <ResultsMessage/>
      <Pokemons/>
      <Buttons/>
      <Modal/>
    </div>
  )
}

export default App