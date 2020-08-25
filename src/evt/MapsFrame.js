import React, {useState} from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Iframe from 'react-iframe'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button'
const Base_url ="https://www.google.com/maps/embed/v1/place?key=AIzaSyCc-_ymQ6Qb3GJoTmwT8yZvK-7y_e7Q9uo&q="

export default function MapsFrame({desti, frominput, enterFrom}) {
    let url = `${Base_url}${desti.latitude},${desti.longitude}`
    let location
    
    console.log('the triooo', desti, frominput, enterFrom)

    const [value, setValue] = useState('placething')
const [input, setInput] = useState("")

function handleChnage(e){
    setInput(e.target.value) 
}
const handleChange = (e) => setValue(e.target.value)

const handleSubmit= (e)=>{
    e.preventDefault()
    enterFrom(input)
    setValue('directions')
    setInput('')

}

 
    let origin =`&origin=${frominput}`
    let destination = `&destination=${desti.latitude},${desti.longitude}`
   
    const Base_direc = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCc-_ymQ6Qb3GJoTmwT8yZvK-7y_e7Q9uo'
    const maphotel = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyCc-_ymQ6Qb3GJoTmwT8yZvK-7y_e7Q9uo&zoom=15&q=hotels+near+'
    console.log('the combo',Base_direc , origin ,destination)
    let urlDirec = `${Base_direc}${origin}${destination}`
    let newformadd = desti.address.replace(/ /g, '+')
    let hotelurl = `${maphotel}${newformadd}`
    console.log('hotelurl comb', hotelurl)
    
    return (
        <div>

<ToggleButtonGroup style={{bg : 'green'}} type="checkbox" value={value} onClick={(e)=> (setValue(e.target.value))} >
      <ToggleButton value='placething'>Event</ToggleButton>
      <ToggleButton value='hotels'>Hotels</ToggleButton>
    </ToggleButtonGroup>


       {(function() {
        switch (value) {
          
        case 'placething':
        
            return (
                <>
                
            <Iframe style={{marginRight:'5px'}} url={url}
            width="550px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            />
           

                <Form onSubmit={handleSubmit}>
  <Form.Row>
    <Col sm={8}>
      <Form.Control onChange={handleChnage} name='inputloco' placeholder='enter from location' value={input} />
    </Col>
    <Col>
      <Button onClick={handleSubmit} > Get Distance</Button>
    </Col>
  </Form.Row>
</Form>
            </>
      
      );
    
    case 'directions':
        return (<>
                
                <Iframe style={{marginRight: "10px"}} url={urlDirec}
                width="550px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                />

<Form onSubmit={handleSubmit}>
  <Form.Row>
    <Col sm={8}>
      <Form.Control onChange={handleChnage} name='inputloco' placeholder='enter from location' value={input} />
    </Col>
    <Col>
      <Button onClick={handleSubmit} > Get Distance</Button>
    </Col>
  </Form.Row>
</Form>
                
                </>
                )
                

    case 'hotels':
        return (
            <>
            
                <Iframe style={{marginRight: "10px"}} url={hotelurl}
                width="550px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                />
                             <Form onSubmit={handleSubmit}>
  <Form.Row>
    <Col sm={8}>
      <Form.Control onChange={handleChnage} name='inputloco' placeholder='enter from location' value={input} />
    </Col>
    <Col>
      <Button onClick={handleSubmit} > Get Distance</Button>
    </Col>
  </Form.Row>
</Form>
                </>
                )
        }
      })()}
           
        </div>
       
    )
}