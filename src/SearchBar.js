import React,{useState} from 'react'

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import Col from 'react-bootstrap/Col'

import {useHistory} from 'react-router-dom'

import Breadcrumb from 'react-bootstrap/Breadcrumb'




export default function SearchBar() {
    const INITIAL = {term:'', location :''}
    const [search, setSearch] = useState(INITIAL)
    const history = useHistory();
    


    const handleChange = event => {
    
    
        const {name, value}= event.target
        setSearch(search => ({
            ...search,
            [name]: value
        }))
    }
    const handleSub = (event)=>{
            event.preventDefault()
            setSearch(INITIAL)
           
           
            history.push({
                pathname: '/search',
                search :`?term=${search.term}&location=${search.location}`,
                state : search
               
            })
            if (history.location.pathname === '/search'){
                history.go({
                pathname: '/search',
                search :`?term=${search.term}&location=${search.location}`,
                state : search

                })
            }

    }
    
    
    return (
        <div style={{marginTop : '10px', marginBottom : "15px"}}>
            <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  
</Breadcrumb>
<Form  onSubmit={handleSub}>
<Form.Row>
    <Col>
      <Form.Control required as='select' onChange={handleChange} type='text' name='term' id='term' value={search.term}  >
         <option value="nightlife">Choose a category</option>
         <option value="music">Music</option>
         <option value="performing-arts">Performing Arts</option>
         <option value="visual-arts">Visual Arts</option>
         <option value="film">Film</option>
         <option value="lectures-books">Lectures & Books</option>
         <option value="fashion">Fashion</option>
         <option value="food-and-drink">Food & Drink</option>
         <option value="festivals-fairs">Festivals & Fairs</option>
         <option value="charities">Charities</option>
         <option value="sports-active-life">Sports & Active life</option>
         <option value="nightlife">Nightlife</option>
         <option value="kids-family">Kids & Family</option>
         </Form.Control>
   
    </Col>
    <Col>
      <Form.Control required  onChange={handleChange} type='text' name='location' id='location' value={search.location} placeholder="Enter address, neighborhood, city, state or zip" />
      
    </Col>
    <Button type='submit'>Search</Button>
  </Form.Row>
  
</Form>
</div>

    )
}