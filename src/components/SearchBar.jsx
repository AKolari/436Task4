import { useState } from "react";


const SearchBar =function({search, setSearch, maxLength, setMaxLength, sortOrder, setSortOrder}){


    const searchHandler=(e)=>{
        setSearch(e.target.value);
    }
    const maxLengthHandler=(e)=>{
        setMaxLength(e.target.value);
    }
    const sortHandler =() =>{
        if(sortOrder==true){
          setSortOrder(false);
          
        }else{
          setSortOrder(true);
        }
      }
    return <>
    <button onClick={sortHandler} className="relative inline-block text-lg group">
          <span className="relative">Re-sort  </span>
          
    </button>
    <label htmlFor="search">Search Query</label>
    <input type="text" name="search" onChange={searchHandler} value={search}></input>
    <label htmlFor="max-length" >Max Length</label>
    <input type="number" name="maxLength" onChange={maxLengthHandler} value={maxLength}></input>
    
    
    
    
    
    
    
    
    
    </>
}




export default SearchBar;