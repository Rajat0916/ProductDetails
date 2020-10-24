import React,{useState} from 'react';
import {data} from './displayTable/data';
import Table from './displayTable/displayTable';
import Pagination from './Pagination/pagination';
import Navbar from './Navbar/Navbar';

const Homepage= ()=>{ 
    const [activePage, setActivePage]= useState(1);
    const [productDetails,setProductDetails]= useState(data.slice(0,15));

    const onChangeHandler= (id)=>{
        setActivePage(id);
        setProductDetails(data.slice(15*(id-1),(15*(id-1))+15));
    }

    const onClickHandler= (value)=>{

        if(value==='name'){
            const valueEntered=document.getElementById('name').value;
            if(valueEntered !== '')
            setProductDetails(data.filter(data=>data.name.includes(valueEntered)));
        }

        if(value==='amount'){
            const fromValueEntered=document.getElementById('amountFrom').value;
            const toValueEntered=document.getElementById('amountTo').value;
            if(fromValueEntered !== '' && toValueEntered !== '')
            setProductDetails(data.filter(data=>(data.amount >= fromValueEntered && data.amount <= toValueEntered)));
        }

        if(value==='date'){
            const fromValueEntered=document.getElementById('dateFrom').value;
            const toValueEntered=document.getElementById('dateTo').value;
            if(fromValueEntered !== '' && toValueEntered !== '')
            setProductDetails(data.filter(data=>(data.date >= fromValueEntered && data.date <= toValueEntered)));
        }
    }

    return(
        <div className='Homepage'>
            <Navbar onClickHandler={onClickHandler}/>
            <Table productDetails={productDetails} />
            <Pagination activePage={activePage} itemsCountPerPage={15} totalItemsCount={data.length} pageRangeDisplayed={(data.length/15) + 1} onChange={onChangeHandler}/>
        </div>
    )
}

export default Homepage;