import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EvtAtt from './EvtAtt'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {catFromAPI} from "../actioncreators";
import axios from 'axios'
import spinner from '../Spinner'

const useStyles = makeStyles((theme) => ({
 
    
    sportcont:{
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign : 'center'  
    },

}));

export default function CatCont({category}) {
    const classes = useStyles();
 
    const [data,setData]= useState([])
    


    let catprop = category

useEffect(() => {
    async function getCat(catprop){

        console.log('this cat in ffec', catprop)

        const res = await axios.get(`https://api.yelp.com/v3/events?categories=${catprop}&start_date<=${+ new Date}&sort_on=time_start&limit=10`,{
          headers:{
          Authorization: `Bearer gA1R_SqY6iK8kZDILXE3SXXYQRyd_AIUgMSGESRz5ViDBx5fNJbiDAt96NinaQTuD0qviy0QObpRb2pE15YKANydaI3IPvm7c2DbT1dnlouU_cMinrI-DZVa8IpBX3Yx`
          }
      })
        console.log('res.data', res.data)
        setData(res.data.results)

    }
    getCat(catprop)
  }, [category,catprop]);

 console.log('this is ct', category)
    


console.log('category', data)
let itemsToRender;
if (data) {
  return (

       <div className={classes.sportcont}>
            
            <EvtAtt data={data}/>
            
        </div>
    





            )

} else {
  itemsToRender = "<Spinner/>";
}

return <div>{itemsToRender}</div>;
        
    
}