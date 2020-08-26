import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'





export default function FilmCont({location, selected, update}) {
    
    const [data, setData]= useState([])
   
    const history = useHistory()
    let loco = location.location
//gets a featured event by location

useEffect(() => {
    async function getFeat(loco){

        console.log('this cat in ffec', loco)

        const res = await axios.post(`https://amplifye-travel-api.herokuapp.com/api/feature`,{
            location : loco
            })
        console.log('resi feat --------', res.data)
        setData(res.data)
        update(res.data)
        

    }
    getFeat(loco)
   
    
    
  }, []);

 console.log('feature', loco)
 console.log('feature', data)
    
  
    
    return (
        <>
        </>
    )
}
