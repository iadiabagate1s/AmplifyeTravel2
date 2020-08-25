import React,{useState, useEffect} from 'react'
import axios from 'axios'


import NearEvtBuis from './NearEvtBuis'

export default function NearBuis({lat, lon}) {
   
    console.log( 'lst long id htere near bus', lat, lon)

    let coordsobj ={lat: lat , lon: lon }
   
    
    const [data,setData]= useState([])
    


   

useEffect(() => {
    async function getSuggest(coordsobj){

        console.log('this cat in ffec', coordsobj )

        const res = await axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${coordsobj.lat}&longitude=${coordsobj.lon}&radius=40000&attributes=hot_and_new&limit=15`,{
          headers:{
          Authorization: `Bearer gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx`
          }
          })
        console.log('res----------data', res.data)
        setData(res.data)

    }
    getSuggest(coordsobj)
  }, [lat,lon,coordsobj]);

 console.log('this is ct', coordsobj)
 console.log('category', data)
 let itemsToRender;
 if (data) {
     console.log('about to be ', data)
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