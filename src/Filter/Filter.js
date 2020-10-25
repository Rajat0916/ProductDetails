import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import "antd/dist/antd.css";
import './Filter.css';


const Filter= (props)=>{
    const { Option }= Select;
    const[showInput, setInput]= useState(false);
    const[value, setValue]= useState('');
    const[inputValue, setInputValue]= useState('');
    
    // Showing Input/Range based on value selected from dropdown
    useEffect(()=>{
        if(value==='name'){
            setInputValue(
                <div className='inputValue'>
                    <input type='text' id='name' placeholder='Enter Product Name' onKeyPress={(event)=>{
                        if(event.key==='Enter')
                            props.onClickHandler(value);
                    }} />
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }else if(value==='amount'){
            setInputValue(
                <div className='inputValue'>
                    <input type='number' id='amountFrom' placeholder='Enter Min Amount' />
                    <input type='number' id='amountTo' placeholder='Enter Max Amount' onKeyPress={(event)=>{
                        if(event.key==='Enter')
                            props.onClickHandler(value);
                    }} />
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }else if(value==='date'){
            setInputValue(
                <div className='inputValue'>
                    <input type='date' id='dateFrom' />
                    <input type='date' id='dateTo' onKeyPress={(event)=>{
                        if(event.key==='Enter')
                            props.onClickHandler(value);
                    }} />   
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }
    },[value,props]);
    
    //Handling dropdown change
    const onChangeHandler= (value)=>{
        setInput(true);
        setValue(value);
    }

    return(
        <div className='Filter'>
            <Select style={{ width: '100px'}} onChange={onChangeHandler} placeholder='Filter' className='dropdown'>
                <Option value='name'>Name</Option>
                <Option value='amount'>Amount</Option>
                <Option value='date'>Date</Option>
            </Select>
            {showInput ? inputValue : null}
        </div>
    )
}

export default Filter;