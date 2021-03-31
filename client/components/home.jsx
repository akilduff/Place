import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Action from './action.jsx'

import focus from '../../Mockups/focus.jpeg';
import focusArrow from '../../Mockups/focusArrow.png';
import connect from '../../Mockups/connect.jpeg'; // this is temporary
import connectArrow from '../../Mockups/connectArrow.png';
import gather from '../../Mockups/gather.jpeg';
import gatherArrow from '../../Mockups/gatherArrow.png';
import checkin from '../../Mockups/checkin.jpeg';
import checkinArrow from '../../Mockups/checkinArrow.png';

const Title = styled.section`
  width: 100%;
  margin: 4em 0 1em 0;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`

const Options = styled.section`
  display: grid;
  grid-Template-Columns: repeat(4, minmax(0, 1fr));
  column-gap: 1em;
  width: auto;
  margin: 1% 10% 6% 10%;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
`

const Selection = styled(Options)`
  grid-Template-Columns: repeat(1, minmax(0, 1fr));
  grid-Template-Rows: repeat(2, minmax(0, auto));
  margin: 0;
  vertical-align: middle;
`

const ScaledImage = styled.img`
  width: 100%;
  object-fit: contain;
`

const Icons = styled.img`
  height: 24px;
  vertical-align: middle;
`

const Home = (props) => {

  let optionsGrid = {
    'gridTemplateColumns': `repeat(${props.places.length}, minmax(0, 1fr))`
  }

  return (
    <HashRouter>
      <div>
        <Route path={`/:action`}>
        </Route>
      </div>
      <Title>I NEED A PLACE TO</Title>
      <Options style={optionsGrid}>{props.places.map((place) => (
        <Selection>
          <NavLink to={`${place}`}>
          <ScaledImage src={`/./images/${place}.jpeg`}/>
          <div>
            <Icons src={`/./images/${place}Arrow.png`}/> {place}
          </div>
          </NavLink>
        </Selection>
      ))}</Options>
    </HashRouter>
  );
}

export default Home;
