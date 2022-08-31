import { createContext, useEffect, useState } from "react";

// POKEMONS CONTEXT
export const PokemonsContext = createContext();


export const PokemonsContextProvider = ({children}) => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon?';

    const [globalState, setGlobalState] = useState({
        pokemonsUrls: [],
        showModal:false,
        pokemon:{},
        loading:false,
        error:false,
        offset:0,
        limit:10, // ITEMS PER PAGE 
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
    const toggleModal = () => {

        setGlobalState({ 
            ...globalState, 
            showModal: !globalState.showModal 
        });

        console.log(globalState.showModal)

        // let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenId}`);
        // let data = await response.json();
        
        // dispatch({
        //     type:'SET_POKEMON_DETAILS',
        //     payload: data
        // });

        // setTimeout(() => {
        //     console.log('fetched Pokemon: ', state.pokemonDetails)
        // },400);
    }

    
    //INCREMENT OFFSET VALUE
    const incrementPagination = () => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0)
        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset + globalState.limit
            });
        },700)
    }
    
    //DECREMENT OFFSET VALUE
    const decrementPagination = (value) => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0)
        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset - globalState.limit
            });
        },800)

        
    } 

    // CHANGE ITEMS PER PAGE - LIMIT VALUE
    const changeItemsPerPage = (value) => {
        setGlobalState({ 
            ...globalState, 
            limit: Number(value)
        });
    } 

    // ONLY RUNS ON START THE APP
    useEffect(() => {
        fetchPokemonsUrls();
    },[]);

     // RUNS EVERY TIME offset and limit VALUES CHANGE
    useEffect(() => {
        fetchPokemonsUrls();
    },[globalState.offset,globalState.limit])

    return(
        <PokemonsContext.Provider value={{
            ...globalState,
            setGlobalState,
            toggleModal,
            incrementPagination,
            decrementPagination,
            changeItemsPerPage,
            //fetchPokemon,
        }}>
            {children}
        </PokemonsContext.Provider>
    )
}