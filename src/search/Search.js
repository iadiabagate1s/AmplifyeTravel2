import React, {useState} from 'react'
import {Suspense} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import FeatEvt from './FeatEvt'
import FeatCont from './FeatCont'
import SearchRes from './SearchRes'




const useStyles = makeStyles((theme) => ({
 
 
    
    ftevt:{
  
    position: 'sticky',
    top:'0'
    
   
        

        
    },

}));


export default function Search() {
    const classes = useStyles();
    const [selected, setSelected] = useState('')
    const history = useHistory()
    const [location, setLocation] =useState()


    
    const formdata= {
        term : history.location.state.term,
        location : history.location.state.location,
        
    }

    

    
    

    function update(data){
        setSelected(data)
    }
   
    return (
        <>
     
      
        <div>
            
       
              <Suspense fallback={<div>...</div>}>
            <FeatEvt location={formdata} update={update}/>
            
         </Suspense>



          

            <Container>
                <Row>
          
         <Col><FeatCont className={classes.ftevt} data={selected}/></Col>


         
         <Suspense fallback={<div>...</div>}>
         <Col><SearchRes formdata={formdata} update={update}/></Col>
         </Suspense>
      


         </Row>
            
         </Container>
            
        </div>
        
        </>
    )
}
