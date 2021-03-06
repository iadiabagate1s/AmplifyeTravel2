import React,{useState} from 'react'
import { useParams } from "react-router-dom";
import {Suspense} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NearBus from './NearBus'
import EventSingle from './EventSingle'
import MapsFrame from './MapsFrame'



const useStyles = makeStyles((theme) => ({
    evtcont:{
        
    },

}));


export default function AttracEvents() {
    const init = {latitude : '', longitude :'', address :''}
    const classes = useStyles();
    const params = useParams()
    const [location , setLocation] = useState(init)
    const [frominput, setFrominput]= useState('')
 
    
   

    const evtLocation = (obj)=>{
       
      
        setLocation({
            ...location,
            ...obj
        })
       
        
    }
 console.log('this is location before passing', location)

    const enterFrom= (valfrom) => {
        
        let valloco = valfrom.replace(' ', '+')
      
        setFrominput(valloco)
    }



    return (
        <>
       
     
        <div className={classes.evtcont}>
            <Container fluid>

                {/* <SearchBar/> */}
            
           <Row>
          
            
          <Col md={4}>
          <Suspense fallback={<h1>...</h1>}>
              <EventSingle evtLocation = {evtLocation} id={params.eventid}/>
          </Suspense>
          
          
        </Col>
         
         
         
       <Col> <MapsFrame frominput={frominput} enterFrom={enterFrom} desti={location} /></Col>
        </Row>
        <Suspense fallback={<h1>...</h1>}>
            <NearBus lat ={location.latitude} lon = {location.longitude}/>
        </Suspense>


        </Container>


        
            
        </div>
       
        </>
    )
}