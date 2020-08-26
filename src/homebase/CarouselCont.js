
import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import moment from 'moment'




const useStyles = makeStyles((theme) => ({
 
 
    
    carouseledit:{
        width : 'auto',
        height : '50vh',
        maxHeight : '52vh',

        
    }
}));

function CarouselCont({data}) {
const classes = useStyles();
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };




    return (

      <>
      <Carousel activeIndex={index} onSelect={handleSelect}>

          {/* for every event make a carousel item  */}
          {data.map(att => (
            
                <Carousel.Item key={att.id}>
                  <div className={classes.carouseledit}>
                <img
                  className="d-block w-100"
                  src={att.image_url}
                  alt="Third slide"
                />
                </div>
                <Link to={`/event/${att.id}`}>
      
                <Carousel.Caption style={{color: 'blue', backgroundColor :'rgba(250, 204, 210, 0.45)'}}>
                 
                  <h3>{att.name}</h3>
                  <h5>{moment(att.start_date).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                  <h6><b>{att.location.city},{att.location.state}</b></h6>
                  <p>
                    {att.description} 
                    
                  </p>
                </Carousel.Caption>
            
              </Link>
              </Carousel.Item>
             
          ))}
    
    
      </Carousel>
      </>
    );
  }
  
export default CarouselCont