import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'





export default function FilmCont({location, selected, update}) {
    
    const [data, setData]= useState([])
   
    const history = useHistory()
    let loco = location.location


useEffect(() => {
    async function getFeat(loco){

        console.log('this cat in ffec', loco)

        const res = await axios.get(`https://api.yelp.com/v3/events/featured?location=${loco}`,{
            headers:{
            Authorization: `Bearer gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx`
            }
            })
        console.log('resi feat --------', res.data)
        setData(res.data)
        update(res.data)
        

    }
    getFeat(loco)
   
    
    
  }, [loco,update, history.location.state]);

 console.log('feature', loco)
 console.log('feature', data)
    
  
    
    return (
        <>
        </>
    )
}
