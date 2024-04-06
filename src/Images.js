import React from 'react'
import './App.css'
const Images = ({data}) => {
  return ( 
    <div>
      <div className='row'>
        {data.map((img)=>
        {  const firstTag = img.tags.split(',')[0];
           const w= firstTag.charAt(0).toUpperCase() + firstTag.slice(1);
          return(
          <div className='col' key={img.id} >
           <img src={img.webformatURL} height='200' width='250'  alt={img.title}/>
            <div className="description">
               <p>{w}</p>              
               <h5> <a href={img.webformatURL}><b>View Image</b> </a></h5>
            </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Images;
