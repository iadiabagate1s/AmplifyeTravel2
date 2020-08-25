import React from 'react'
import moment from 'moment'

import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function SearchData({listdata, update}) {
    console.log('views from the list indi', listdata)
    console.log('views from the list indi', update)
    return (
        <>
           
                          <Card>
                          <Card.Header>{moment(listdata.time_start).format('MMMM Do YYYY, h:mm:ss a') }</Card.Header>
                          <Card.Body>
                            <Card.Title>{listdata.name}</Card.Title>
                            <Card.Text>
                             {listdata.description}
                            </Card.Text>
                            <Button onClick={()=>(update(listdata))} variant="outline-success">more info</Button>
                          </Card.Body>
                        </Card>
           

  

            
        </>
    )
}
