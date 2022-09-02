import { createContext,useState } from "react";

// POKEMONS CONTEXT
export const PokemonsContext = createContext();


export const PokemonsContextProvider = ({children}) => {
   const baseUrl = 'https://pokeapi.co/api/v2/pokemon?';
   const [globalState, setGlobalState] = useState({
        pokemonsUrls: [],
        showModal:false,
        selectedPokemon:'',
        loading:false,
        error:false,
        offset:0,
        limit:20, // ITEMS PER PAGE 
    })

    console.log(globalState.pokemonsUrls.length)

    const setCurrentPokemon = (pokemonName) => {
        setGlobalState({ 
            ...globalState, 
            selectedPokemon:{},
        });
        
        setGlobalState({ 
            ...globalState, 
            selectedPokemon: pokemonName,
            showModal:true
        });
    }
    

    // *** OPEN MODAL ***
    const openModal = () => {
        setGlobalState({ 
            ...globalState, 
            showModal: true
        });
    }

    // *** CLOSE MODAL ***
    const closeModal = () => {
        setGlobalState({ 
            ...globalState, 
            showModal: false
        });
    }

    //INCREMENT OFFSET VALUE
    const incrementPagination = () => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0);

        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset + globalState.limit
            });
        },400)
    }
    
    //DECREMENT OFFSET VALUE
    const decrementPagination = (value) => {
        const navbar = document.querySelector('.navbar');
        navbar.scrollTo(0,0);

        if(globalState.pokemonsUrls.length < globalState.limit){
            setGlobalState({ 
                ...globalState, 
                offset: 0
            });
            return;
        }

        setTimeout(() => {
            setGlobalState({ 
                ...globalState, 
                offset: globalState.offset - globalState.limit
            });
        },400)
    } 

    // CHANGE ITEMS PER PAGE - LIMIT VALUE
    const changeItemsPerPage = (value) => {
        setGlobalState({ 
            ...globalState, 
            limit: Number(value)
        });
    } 

    const fetchPokemonsUrls = async () => {
        setGlobalState({ 
          ...globalState, 
          loading:true 
        });
    
        const res = await fetch(`${baseUrl}offset=${globalState.offset}&limit=${globalState.limit}`);
        const data = await res.json();
    
        setGlobalState({ 
          ...globalState, 
            pokemonsUrls: data.results, 
            loading:false
        });
      };

    return(
        <PokemonsContext.Provider value={{
            ...globalState,
            setGlobalState,
            openModal,
            closeModal,
            fetchPokemonsUrls,
            setCurrentPokemon,
            incrementPagination,
            decrementPagination,
            changeItemsPerPage,
        }}>
            {children}
        </PokemonsContext.Provider>
    )
}