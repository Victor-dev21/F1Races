import logo from './logo.svg';
import './App.css';
import Video from './components/ImageRetreive'
import React, {Component} from 'react'
import SearchComponent from './components/SearchComponent';
import {NavBar} from './components/NavBarComponent';
import CircuitComponent from './components/CircuitComponent';
import {Routes, Route, Router} from 'react-router-dom'
import F1Api from './components/api'
class App extends Component {
  constructor(){
    super();
  }
  render(){
  return (
    <div>
    
     <>
      <NavBar/>
      <Routes>
        <Route path='circuits' element={<CircuitComponent races={F1Api.circuits()}/>}/>
        <Route path='/' element={<SearchComponent />}/>
      </Routes>
      </>
      
    </div>
  );
}
}

export default App;
