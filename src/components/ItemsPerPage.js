import React, { useState } from 'react'
import '../sass/ItemsPerPage.scss';
import UsePokemonsContext from '../hooks/CustomPokemonsState';

const ItemsPerPage = () => {
    const {changeItemsPerPage,limit} = UsePokemonsContext();

    const handleDropDown = (e) => {
        changeItemsPerPage(e.target.value)
    }


  return (
    <section className='ItemsPerPage'>
        <div className='container'>
            <h4>ItemsPerPage</h4>

            <form className='form'>
                {/* <label for='cars'>Items Per Page</label> */}
                <select name='cars' value ={limit} className='selector' onChange={handleDropDown}>
                    {/* <option selected disabled>Choose a value</option>  */}
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='50'>50</option>
                    <option value='70'>70</option>
                    <option value='100'>100</option>
                </select>
            </form>
        </div>
    </section>
  )
}

export default ItemsPerPage