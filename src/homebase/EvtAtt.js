import React from 'react'
import Card from 'react-bootstrap/Card'



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
        height: '50vh',
        width: '50vw',
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
        <div className='supercont' >
         <div className='it'>
         
        
                 {data.map(spevt => (
                    
<div className='divcard'>
<Link to={`/event/${spevt.id}`} >
  <a>
  <Card className='item' key={spevt.id} >
    <Card.Img style={{height:'35vh'}} variant="top" src={spevt.image_url} />
    <Card.Body className='cardbod'>
      <Card.Title >{spevt.location.city}, {spevt.location.state}</Card.Title>
      <small>{spevt.name}</small>
  
    </Card.Body>
    <Card.Footer className='cardfoot'>
      <small className="text-muted"><b>Date </b>{moment(spevt.time_start).format('MMMM Do YYYY, h:mm:ss a')}</small>
    </Card.Footer>
  </Card>
</a>
</Link>
</div>
  
          ))}

          </div> 
          </div>
        
        </>
    )
}
