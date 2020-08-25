import React from 'react'
import {Suspense} from 'react'
import Container from 'react-bootstrap/Container'
import CarouselHandle from './CarouselHandle'
import NavTab from './NavTab'

export default function Home() {
    return (
        <div>
            <Container fluid >

       
      
       <Suspense fallback={<div>Hello</div>}>
       <CarouselHandle/>
       

       
       
          <NavTab/>
          </Suspense>
         
          

       
     
       </Container>
            
        </div>
    )
}
