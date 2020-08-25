import React from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import moment from 'moment'

export default function FeatCont({data}) {
    console.log(data)
    return (
        <div style={{width : '30vw' ,position: '-webkit-sticky',position: 'sticky',top:'5px'}}>

<Container style={{position: '-webkit-sticky',position: 'sticky'}}>
  <Row>
   
    <Col xs={6} md={6}>
      <div ><Image style={{width:'27vw',height:'27vh', align :'center'}} src={data.image_url} roundedCircle /></div>
      
    </Col>
    
  </Row>
  <Row>
  <Card style={{width:'35vw', marginLeft:"5"}} className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>
      {data.description}
      
    </Card.Text>
    
    <h6>Date: {moment(data.time_start).format('MMMM Do YYYY, h:mm:ss a')}</h6>
    
    <Button href={data.tickets_url} variant="primary">Tickets</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Cost : <b>${data.cost}</b></Card.Footer>
</Card>
  </Row>
</Container>

            
        </div>
    )
}