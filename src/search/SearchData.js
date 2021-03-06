import React from 'react'
import moment from 'moment'


import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button'

export default function SearchData({listdata, update}) {
    console.log('views from the list indi', listdata)
    console.log('views from the list indi', update)
    return (
        <>
           
                          <Card>
                          <Card.Header>{moment(listdata.time_start).format('MMMM Do YYYY, h:mm:ss a') }</Card.Header>
                          <Card.Body>
                            <Card.Title style={{color : 'green', fontSize: '1.5rem', fontWeight : '20rem'}}>{listdata.name}</Card.Title>
                            <Card.Text>
                             {listdata.description}
                            </Card.Text>
                            <Button id='expbtn' onClick={()=>(update(listdata))} variant="outline-success">Expand</Button>
                            <div id='eventdet'><Link to={`/event/${listdata.id}`} >
       <a>
    <Button variant="primary">Event Details</Button>
    </a>
    </Link></div>
                      
                          </Card.Body>
                        </Card>
           

  

            
        </>
    )
}
