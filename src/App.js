import React, { useState } from 'react';
import axios from 'axios';
import Images from './Images';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
const api_key="42136493-05d834167a0c99e80c4fe07c3";

const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const handleChange=(e)=>{
    setSearch(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.get(`https://pixabay.com/api/?key=${api_key}&q=${search}&image_type=photo`)
    .then(res => {
       console.log(res.data.hits.id);
       setData(res.data.hits);
     })
    .catch(err =>{
      console.log("Error on fetching data!!");
    })
    }
  return (
    <div className='app'>
      <div className='container'>
      <h1 className='head'>IMAGE SEARCH</h1><br></br>
        <div className='header'>
        <form className='search' onSubmit={handleSubmit}>
         <input className='text' type='text' placeholder='Type something to search..' value={search} onChange={handleChange}/>
         <input className='submit' type='submit' value='Search' />
        </form>
        </div><br></br>
         {data.length>=1 ? <Images data={data} /> : <h2> No Data Loaded!! </h2>}
      </div>
    </div>
  )
}

export default App;
