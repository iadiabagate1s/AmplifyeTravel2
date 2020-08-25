import React, {useState, useEffect} from 'react'

import CarouselCont from './CarouselCont'

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useSelector, useDispatch} from "react-redux";
import {FromAPI} from "../actioncreators";
import SpinnerL from '../Spinner'



const useStyles = makeStyles((theme) => ({
 
 
    
    carouseledit:{
        width : 'auto',
        height : '50vh',
        maxHeight : '52vh',

        
    }
}));
function Carouselhandle() {

    const [data, setData] = useState([])
    const classes = useStyles();


    useEffect(() => {
      async function getCat(catprop){
  
         
  
          const res = await axios.get(`https://amplifye-travel-api.herokuapp.com/api/gen`)
    
          setData(res.data)
  
      }
      getCat()
    }, []);



let itemsToRender;
if (data) {
  return (
   <div>
       <CarouselCont data={data}/>
    </div>





            )

} else {
  itemsToRender = <SpinnerL/>;
}

return <div>{itemsToRender}</div>;
}



export default Carouselhandle