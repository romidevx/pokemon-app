import React from 'react';

// COMPONENTS
import Navbar from './components/Navbar';
import ItemsPerPage from './components/ItemsPerPage';
import Pokemons from './components/Pokemons';
import Buttons from './components/Buttons';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ItemsPerPage/>
      <Pokemons/>
      <Buttons/>
    </div>
  )
}

export default App