
import React from 'react'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import movieList from './utils/movies'
import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  const [search, setSearch]= useState('');
  const [filteredMovies, setFilteredMovies]=useState([]);
  const [maxLength, setMaxLength] = useState();
  const [sortOrder, setSortOrder] = useState(true);

  


  
  
  useEffect(() => {
  
    const moviesClone =[...movieList];
    let filtered= moviesClone.filter(function(movie){
      return movie.title.toUpperCase().includes(search.toUpperCase())&&
      (!maxLength  ||parseInt(maxLength, 10)>0 && parseInt(movie.length, 10)<=parseInt(maxLength, 10))

  
    })
    if(sortOrder==true){
      filtered.sort((a, b)=>(a.length-b.length));
    }else{
      filtered.sort((a, b)=>(b.length-a.length));
    }



    
    setFilteredMovies(filtered)

  
   
  }, [search, maxLength, sortOrder]);
  

  





//<>This is the same as <React.Fragment>
  return (
    <>
      
      {/*Header Bar for searching  */}
      
      <SearchBar search={search} setSearch={setSearch} maxLength={maxLength} setMaxLength={setMaxLength} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
      <Movies movies={filteredMovies} />
     
      
    </>
  )
}

export default App
