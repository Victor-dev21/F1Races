import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
  

export const NavBar = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/circuits">Circuits</NavLink> 
        </nav>
    )
}
