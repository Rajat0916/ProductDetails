import React,{useState,useEffect} from 'react';
import {data} from './displayTable/data';
import Table from './displayTable/displayTable';
import Pagination from './Pagination/pagination';
import Navbar from './Navbar/Navbar';

const Homepage= ()=>{ 
    const [activePage, setActivePage]= useState(1);
    const [productDetails,setProductDetails]= useState(data.slice(0,15));
    const [totalItemsCount,setTotalItemsCount]= useState(data.length);
    const [pageRangeDisplayed,setPageRangeDisplayed]= useState((data.length/15) + 1);
    const [searchedResult,setSearchedResult]= useState(data);

    const onChangeHandler= (id)=>{
        setActivePage(id);
        setProductDetails(searchedResult.slice(15*(id-1),(15*(id-1))+15));
    }

    useEffect(()=>{
        setActivePage(1);
        setProductDetails(searchedResult.slice(0,15));
        setTotalItemsCount(searchedResult.length);
        setPageRangeDisplayed((searchedResult.length/15)+1);
    },[searchedResult]);

    const onClickHandler= (value)=>{

        if(value==='name'){
            const valueEntered=document.getElementById('name').value;
            if(valueEntered !== '')
            setSearchedResult(data.filter(data=>data.name.includes(valueEntered)));
        }else if(value==='amount'){
            const fromValueEntered=document.getElementById('amountFrom').value;
            const toValueEntered=document.getElementById('amountTo').value;
            if(fromValueEntered !== '' && toValueEntered !== '')
            setSearchedResult(data.filter(data=>(data.amount >= fromValueEntered && data.amount <= toValueEntered)));
        }else if(value==='date'){
            const fromValueEntered=document.getElementById('dateFrom').value;
            const toValueEntered=document.getElementById('dateTo').value;
            if(fromValueEntered !== '' && toValueEntered !== '')
            setSearchedResult(data.filter(data=>(data.date >= fromValueEntered && data.date <= toValueEntered)));
        }
    }

    return(
        <div className='Homepage'>
            <Navbar onClickHandler={onClickHandler}/>
            <Table productDetails={productDetails} />
            <Pagination activePage={activePage} itemsCountPerPage={15} totalItemsCount={totalItemsCount} pageRangeDisplayed={pageRangeDisplayed} onChange={onChangeHandler}/>
        </div>
    )
}

export default Homepage;