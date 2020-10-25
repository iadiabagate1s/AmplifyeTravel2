import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
 
 
    
    imagecontainer :{
       
        verticalAlign: 'middle',
        display: 'inline-block',
        width :'99%',
        whiteSpace : 'nowrap',
        marginTop : '7px',
        border :'1px solid black',
        overflowX: 'auto',
        overflowY: 'hidden',
      },
      itemscl :{
        height: '55vh',
        width: '30vw',
        background: 'white',
        margin: '3px',
        display: 'inline-block',
        lineHeight: '14px',
        color: 'blue',
       
        
        
      }
      
    
}));


export default function NearEvtBuis({data}) {
    const classes = useStyles();


    return (
        <>
        <div className='supercont'>
        
         <div className='wrapper'>
         
        
                 {data.map(spevt => (
                    

<div className='cd'>
  <Card key={spevt.id} className='card' >
    <Card.Img style={{height : '35vh', width: '23vw'}}  variant="top" src={!spevt.image_url ? '/noimg.png': spevt.image_url}/>
    <Card.Body className='imbod'  >
      
      <Card.Title ><small >{spevt.name}</small></Card.Title>
              {spevt.categories.map(cat => (<small> {cat.title} </small>))}
      
      <Card.Text  >
      <h6 >{(spevt.distance / 1600).toFixed(1)} miles</h6>
      </Card.Text>
      
      <b className=""><a href={spevt.url}>Link </a></b>
    </Card.Body>
    
  </Card>
  </div>
          ))}

          </div> 
            
          </div>
        </>
    )
}
