import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import styled from 'styled-components';

import Home from './home.jsx'
import About from './about.jsx'
import Action from './action.jsx'

const BottomMenu = styled.section`
  display: grid;
  grid-Template-Columns: repeat(7, minmax(0, 1fr));
  grid-auto-flow: row;
  width: auto;
  margin: 0 10% 0 10%;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  border-top: 2px solid grey;
`

const NavBar = (props) => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" render={() => <Home places={props.places}/>}/>
        <Route path="/about" component={About}/>
        <Route path="/:action" render={() => <Action places={props.places}/>}/>
      </div>
    <>
      <BottomMenu>
        <span><NavLink to='/about'>about us</NavLink></span>
        <span>locations</span>
        <span>memberships</span>
        <span><NavLink to='/'>Home</NavLink></span>
        <span>your place</span>
        <span>inbox</span>
        <span>profile</span>
      </BottomMenu>
    </>
    </HashRouter>
  );
}

export default NavBar;
