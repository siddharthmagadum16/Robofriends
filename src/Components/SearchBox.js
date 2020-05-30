import React from 'react';
// import App from './App';
const SearchBox=({ SearchChange })=> {

    return (
        <div >
            <input className='ma3 pa2 br2' 
            type='search'  
            placeholder='Search Robots' 
            onChange ={SearchChange}
            />
        </div>
    );
}

export default SearchBox;