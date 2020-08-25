import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EvtAtt from './EvtAtt'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
 
    
    sportcont:{
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign : 'center'  
    },

}));

export default function CatCont({category}) {
    const classes = useStyles();
 
    const [data,setData]= useState([])
    


    let catprop = category

useEffect(() => {
    async function getCat(catprop){

       

        const res = await axios.post(`https://amplifye-travel-api.herokuapp.com/api/category`,{
          cat : catprop
      })
      console.log('this is data before map', res.data.results)
        const maparr = res.data.results.filter(m =>( m.image_url && m.name !== "Velkoobchod oblečení - www.VelkoobchodTextilu.cz" ) )
        
        setData(maparr)

    }
    getCat(catprop)
  }, [category]);



let itemsToRender;
if (data) {
  return (

       <div className={classes.sportcont}>
            
            <EvtAtt data={data}/>
            
        </div>
    





            )

} else {
  itemsToRender = "...";
}

return <div>{itemsToRender}</div>;
        
    
}