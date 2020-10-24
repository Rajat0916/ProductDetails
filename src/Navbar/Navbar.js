import React from 'react';
import Filter from '../Filter/Filter';
import './Navbar.css';

const Navbar= (props)=>{
    return(
        <div className='Navbar'>
            <h1 id='title'>Product Details</h1>
            <Filter onClickHandler={props.onClickHandler}/>
        </div>
    )
}

export default Navbar;