import React from 'react'
import '../sass/Buttons.scss';
import CustomPokemonsState from '../hooks/CustomPokemonsState';

const Buttons = () => {

  const {offset,limit,pokemonsUrls,incrementPagination,decrementPagination} = CustomPokemonsState();
  //console.log('buttons: ', { offset,limit})

  return (
    <section className='buttons'>
        <div className='container'>
            <button className='btn-previous' onClick={() => decrementPagination()} disabled={offset === 0}>Previous 20</button>
            <button className='btn-next'     onClick={() => incrementPagination()} disabled={pokemonsUrls < limit}>Next 20</button>
        </div>
    </section>

  )
}

export default Buttons