import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './homebase/Home'
import EventDetail from './evt/EventDetail'
import SearchBar from './SearchBar'
import Search from './search/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
      <SearchBar/>

      <Route exact path='/search'>
      
      <Search />
      </Route>


      <Route exact path='/event/:eventid'>
      
        <EventDetail/>
      </Route>



      <Route exact path='/'>
 
      <Home/>
      </Route>
      
      
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
