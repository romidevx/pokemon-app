import React from 'react'
import '../sass/Modal.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';
import { useState } from 'react';
import { useEffect } from 'react';

const Modal = () => {
    const {closeModal,showModal, selectedPokemon} = CustomPokemonsState();
    const [details,setDetails] = useState({});

    console.log('pokemon: ', selectedPokemon)

    useEffect(() => {
        const getPokemon = async () => {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
            let data = await response.json();
            let pokemonInfo = {
                id: data.id,
                name: data.name,
                image: data.sprites.other.dream_world.front_default === undefined ? 'http://www.pixelegends.com/wp-content/uploads/2017/06/pokemonno.jpg' : data.sprites.other.dream_world.front_default,
                type: !data.types[0].type.name ? 'unknown' : data.types[0].type.name,
                height: data.height,
                weight: data.weight,
                abilities : data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name
            }
            console.log('all data: ', data)
            setDetails(pokemonInfo)
        }

        getPokemon();
    },[selectedPokemon]);

  return (
    <section className={showModal ? 'Modal' : 'Modal invisible'} onClick={() => closeModal()}>
        
            <div className="container">
                    <h1 className='btn-close' onClick={() => closeModal()}>X</h1>
                    <div className="container-inner">
    
                        {/* BASIC DETAILS */}
                        <div className="top-details">
    
                            <div className="pokemonImage">
                               <img src={details.image}/> 
                            </div>
    
                            <div className="basic-details">
                                <h4>{details.name}</h4>
    
                                <div className="description">
    
                                    <div className="left">
                                        <p>Id# {details.id}</p>
                                        <p>Type: {details.type}</p>
                                        {/* <p>type: unknown</p> */}
                                    </div>
                                    <div className="right">
                                        <p>Height: {details.height}m</p>
                                        <p>Weight: {details.weight}lbs</p>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                        <h4>More details</h4>        
                        {/* EXTRA DETAILS */}
                        <div className="extra-details">
                            
                            <p>Ablities: {details.abilities}</p>
                            {/* <p>Details 1</p>
                            <p>Details 1</p>
                            <p>Details 4</p>
                            <p>Details 1</p>
                            <p>Details 1</p>
                            <p>Details 1</p>
                            <p>Details 4</p>
                            <p>Details 1</p>
                            <p>Details 1</p>
                            <p>Details 1</p>
                            <p>Details 4</p> */}
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default Modal;