
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import axios from 'axios'





export default function EventDetail({evtLocation, id}) {

  
    const [key, setKey] = useState('Description');
    
    
    const [newdata,setNewData]= useState([])
    const [addi, setAddi] = useState()
    
  
  
        let idprop = id
    useEffect(() => {
        async function getCat(idprop){
    
            console.log('event id', idprop)
    
            const res = await axios.post(`https://amplifye-travel-api.herokuapp.com/api/event`,{
              id : idprop
          })
            
            setNewData(res.data)
            evtLocation({latitude: res.data.results.latitude, longitude : res.data.results.longitude,
                address : `${res.data.results.location.display_address[0]}${res.data.results.location.display_address[1]}`
            }) 
            setAddi(`${res.data.results.location.display_address[0]}${res.data.results.location.display_address[1]}`)
        }
        getCat(idprop)
      }, [idprop, id]);
    
     
        
      let itemsToRender;
    
    
    if (newdata) {
       let resarr = {...newdata.results}
        console.log('data in side ',resarr.name)
       
        let locolon = `${newdata.longitude}`
        const locolat = `${newdata.latitude}`
       
        let newstobj ={latitude : locolat, longitude: locolon,}
    
       
    
    
        if (newstobj.latitude && newstobj.longitude){
          function updatedata(newstobj){
            evtLocation(newstobj)}
            
          
          }
    
    
    
        return (
            <div className='evtdiv'>
              
              
               <Card className='evtCard' >
        <Card.Img variant="top" src={resarr.image_url} alt='public/noimg.png' />
        <Card.Body>
          <Card.Text>
            <h3>{resarr.name}</h3>
            {(resarr.is_free)? (<h4>Free</h4>):(<h4>${resarr.cost}</h4>)}
            <a href={resarr.event_site_url}><h5>Link</h5></a>
            
    
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
      <Tabs
      className='tab'
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="Description" title='Description'>
            {resarr.description}
          </Tab>
          <Tab eventKey="info" title="address">
            {/* <p>{resarr.location.display_address[0]}, {resarr.location.display_address[1]} {resarr.location.display_address[2]}</p> */}
            {addi}
        
          </Tab>
          
        </Tabs>
            
            </div>
        )
      
      
      
      
      } else {
        itemsToRender = "Loading...";
      }
      
      return <div>{itemsToRender}</div>;

}