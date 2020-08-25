import React,{useState, useEffect} from 'react'
import axios from 'axios'


import NearEvtBuis from './NearEvtBuis'

export default function NearBuis({lat, lon}) {
   
    console.log( 'coords', lat, lon)

    const coordsobj ={lat: lat , lon: lon }
   
    
    const [data,setData]= useState([])
    


   

useEffect(() => {
    async function getSuggest(coordsobj){

        console.log('coords object ', coordsobj )

        const res = await axios.post(`https://amplifye-travel-api.herokuapp.com/api/suggest`,{
          lat : coordsobj.lat,
          lon : coordsobj.lon
          })
      
        setData(res.data)

    }
    getSuggest(coordsobj)
  }, [lat, lon]);

 let itemsToRender;
 if (data) {
  
   return (

     
      <div>
            <h1>Popular Places Nearby</h1>
            <NearEvtBuis data={data} />


            
        </div>
 
 
 
 
             )
 
 } else {
   itemsToRender = "Loading...";
 }
 
 return <div>{itemsToRender}</div>;
    
    
   
    
}