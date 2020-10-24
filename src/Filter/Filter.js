import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import "antd/dist/antd.css";
import './Filter.css';


const Filter= (props)=>{
    const { Option }= Select;
    const[showInput, setInput]= useState(false);
    const[value, setValue]= useState('name');
    const[inputValue, setInputValue]= useState('');
    
    useEffect(()=>{
        if(value==='name'){
            setInputValue(
                <div className='inputValue'>
                    <input type='string' id='name' placeholder='Enter Product Name'/>
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }else if(value==='amount'){
            setInputValue(
                <div className='inputValue'>
                    <input type='number' id='amountFrom' placeholder='Enter Min Amount'/>
                    <input type='number' id='amountTo' placeholder='Enter Max Amount'/>
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }else if(value==='date'){
            setInputValue(
                <div className='inputValue'>
                    <input type='date' id='dateFrom' />
                    <input type='date' id='dateTo' />   
                    <button id='Search' onClick={props.onClickHandler.bind(this,value)}>Search</button>
                </div>
            )
        }
    },[value,props.onClickHandler])
    
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