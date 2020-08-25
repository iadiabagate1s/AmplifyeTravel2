import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCont from './CarouselCont'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {FromAPI} from "../actioncreators";
import Spinner from '../Spinner'



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
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    

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
  itemsToRender = <Spinner/>;
}

return <div>{itemsToRender}</div>;
}



export default Carouselhandle