import { createContext, useEffect, useState } from "react";

// POKEMONS CONTEXT
export const PokemonsContext = createContext();


export const PokemonsContextProvider = ({children}) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon?';

    const [globalState, setGlobalState] = useState({
        pokemonsUrls: [],
        pokemon:{},
        loading:false,
        error:false,
        offset:0,
        limit:30, // ITEMS PER PAGE 
    })


    const fetchPokemonsUrls = async () => {
        const {offset,limit} = globalState;
        setGlobalState({ ...globalState, loading:true});
        const res = await fetch(`${baseUrl}offset=${offset}&limit=${limit}`);
        const data = await res.json();
        setGlobalState({ 
            ...globalState, 
            pokemonsUrls:data.results, 
            loading:false
        });
    };

    // *** FETCH POKEMON DETAILS ***
    // const fetchPokemon = async (chosenId) => {
    //     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenId}`);
    //     let data = await response.json();
        
    //     // dispatch({
    //     //     type:'SET_POKEMON_DETAILS',
    //     //     payload: data
    //     // });

    //     setTimeout(() => {
    //         console.log('fetched Pokemon: ', state.pokemonDetails)
    //     },400);
    // }

    
    //INCREMENT OFFSET VALUE
    const incrementPagination = () => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0)
        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset += 30
            });
        },800)
    }
    
    //DECREMENT OFFSET VALUE
    const decrementPagination = (value) => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0)
        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset -= 30
            });
        },800)

        
    } 

    // CHANGE ITEMS PER PAGE - LIMIT VALUE
    const changeItemsPerPage = (value) => {
        // setGlobalState({ 
        //     ...globalState, 
        //     limit: Number(value)
        // });
        
        console.log('value received: ' + value)
        console.log({
            limit:  globalState.offset, 
            offset: globalState.limit
        })
    } 

    useEffect(() => {
        fetchPokemonsUrls();
    },[]);

    useEffect(() => {
        fetchPokemonsUrls();
    },[globalState.offset])

    return(
        <PokemonsContext.Provider value={{
            ...globalState,
            incrementPagination,
            decrementPagination,
            changeItemsPerPage,
            //fetchPokemon,
        }}>
            {children}
        </PokemonsContext.Provider>
    )
}