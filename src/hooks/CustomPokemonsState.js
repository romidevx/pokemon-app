import {useContext} from 'react';
import {PokemonsContext} from '../Store/PokemonsContext'

const UsePokemonsContext = () => {
    const allPokemonContext = useContext(PokemonsContext);
    return allPokemonContext;
}

export default UsePokemonsContext;