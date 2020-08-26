import React,{useState, useEffect} from 'react'
import axios from 'axios'
import SpinnerL from '../Spinner'


import SearchData from './SearchData'




export default function SearchRes({formdata, update}) {
    
    const [data, setData]= useState([])

    

  console.log( formdata, '======form ------')


useEffect(() => {
    async function getFeat(formdata){

        

      const res = await axios.post(`https://amplifye-travel-api.herokuapp.com/api/result`,{
        term : formdata.term,
        location: formdata.location
        })
        console.log('resi feat --------', res.data)
        setData(res.data)
       

    }
    getFeat(formdata)
    
  }, []);
  
    
  if (data){
    return (
        <div style={{width :'60vw'}} >
            
        {data.length === 0 ? <div><SpinnerL/></div> : data.map(m => (

    <SearchData update={update} listdata={m}/>

    ))}
        </div>
    )

  }
  else{
      return <div>...</div>
  }
  
}