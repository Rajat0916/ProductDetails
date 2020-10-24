import React from 'react';
import Pagination from 'react-js-pagination'; 
import './pagination.css';

const pagination= (props)=>{
    return(
        <div className='Pagination'>
            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.itemsCountPerPage}
                totalItemsCount={props.totalItemsCount}
                pageRangeDisplayed={props.pageRangeDisplayed}
                onChange={props.onChange.bind(this)}
                prevPageText='Prev'
                nextPageText='Next'
                hideFirstLastPages
            />
        </div>
    )
}

export default pagination;