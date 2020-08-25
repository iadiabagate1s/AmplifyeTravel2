import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

import SearchData from './SearchData'




export default function SearchRes({formdata, update}) {
    
    const [data, setData]= useState([])

    

  console.log( formdata, '======form ------')


useEffect(() => {
    async function getFeat(formdata){

        

      const res = await axios.get(`https://api.yelp.com/v3/events?categories=${formdata.term}&location=${formdata.location}&start_date<=${+ new Date}&sort_on=time_start&radius=40000&limit=25`,{
        headers:{
        Authorization: `Bearer gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx`
        }
        })
        console.log('resi feat --------', res.data)
        setData(res.data)
       

    }
    getFeat(formdata)
    
  }, [formdata,data, update]);
  
    
  if (data){
    return (
        <div >
            
        {data.length === 0 ? <h4>No results </h4> : data.map(m => (

    <SearchData update={update} listdata={m}/>

    ))}
        </div>
    )

  }
  else{
      return <div>...</div>
  }
  
}