import React, {useState, useEffect} from 'react'

import CarouselCont from './CarouselCont'

import { makeStyles } from '@material-ui/core/styles';

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
    const dispatch = useDispatch()
    
    const classes = useStyles();


    

useEffect(() => {
    dispatch(FromAPI());
  }, [dispatch]);

 
    

const data = useSelector(st => st[0]);

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