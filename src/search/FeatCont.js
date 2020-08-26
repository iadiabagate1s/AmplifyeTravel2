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
        <div style={{width : '90%' ,position: 'sticky',top:'5px'}}>
{/* style={{position: '-webkit-sticky',position: 'sticky'}} */}
<Container >
  <Row>
   
    <Col xs={6} md={6}>
      <div ><Image className='ftpic' src={data.image_url} roundedCircle /></div>
      
    </Col>
    
  </Row>
  <Row className='btcardrow' >
  <Card  className="text-center">
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