import React from 'react'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import moment from 'moment'



const useStyles = makeStyles((theme) => ({
 
 
    
    imagecontainer :{
       
        verticalAlign: 'middle',
        display: 'inline-block',
        width :'90%',
        whiteSpace : 'nowrap',
        marginTop : '20px',
        
       
        overflowX: 'auto',
        overflowY: 'hidden',
      },
      itemscl :{
        height: '60vh',
        width: '30vw',
        maxWidth : '50vw',
        
        background: 'white',
        margin: '5px',
        display: 'inline-block',
        lineHeight: '25px',
        color: 'blue',
        wordWrap: 'break-word',
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
        
        
      }
      
    
}));
export default function EvtAtt({data}) {
    const classes = useStyles();


    return (
        <>
        <Container fluid>
         <div className={classes.imagecontainer}>
         
        
                 {data.map(spevt => (
                    
<div className={classes.itemscl}>
<Link to={`/event/${spevt.id}`} >
  <a>
  <Card key={spevt.id} style={{display: 'block', width: '30vw',wordWrap: 'break-word', height:'40vh', textAlign:'center'}}>
    <Card.Img style={{height : '45vh'}}  variant="top" src={!spevt.image_url ? ('public/noimg.png'):(spevt.image_url)} />
    
 



    <Card.Body style={{maxWidth: '60vw',wordWrap: 'break-word', height:'15vh'}} >
      <Card.Title >{spevt.location.city}, {spevt.location.state}</Card.Title>
      <small>{spevt.name.slice(0,21)}</small>
  
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><b>Date </b>{moment(spevt.time_start).format('MMMM Do YYYY, h:mm:ss a')}</small>
    </Card.Footer>
  </Card>
</a>
</Link>
</div>
  
          ))}

          </div> 
          </Container>
        
        </>
    )
}
