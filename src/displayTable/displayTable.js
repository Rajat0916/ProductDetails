import React from 'react';
import './displayTable.css';

const displayTable= (props)=> {
    return(
        <div className='displayTable'>
            <table id='productDetails'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name </th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        props.productDetails.map((data,key)=>{
                            return(
                                <tr key={key}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default displayTable;