import React from 'react'
import '../sass/Modal.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';

const Modal = () => {
    const {showModal,toggleModal} = CustomPokemonsState();
  return (
    <section className={showModal ? 'Modal' : 'Modal invisible'} onClick={() => toggleModal()}>
        <div className="container">
                <h1 className='btn-close' onClick={() => toggleModal()}>X</h1>
            <div className="container-inner">

                {/* BASIC DETAILS */}
                <div className="top-details">
                    <div className="pokemonImage">
                        <h4>Image</h4>
                    </div>
                    <div className="basic-details">
                        <h4>Pokemon Name</h4>
                        <p>Id# 344</p>
                        <p>Type: Fire</p>
                    </div>
                </div>

                {/* EXTRA DETAILS */}
                <div className="extra-details">
                    <h3>More details</h3>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 4</p>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 4</p>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 1</p>
                    <p>Details 4</p>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Modal;