import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Action from './action.jsx'

import focus from '../../Mockups/focus.jpeg';
import gather from '../../Mockups/gather.jpeg';
import checkIn from '../../Mockups/check-in.jpeg';
import upArrow from '../../Mockups/up-arrow.png';
import leftArrow from '../../Mockups/left-arrow.png';
import rightArrow from '../../Mockups/right-arrow.png';
import downArrow from '../../Mockups/down-arrow.png';

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
  return (
    <>
    <HashRouter>
      <div>
        <Route path={`/:action`}>
          <Action/>
        </Route>
      </div>
      <Title>I NEED A PLACE TO</Title>
      <Options>
        <Selection>
          <NavLink to='connect'>
          <ScaledImage src={focus}/>
          <div>
            <Icons src={leftArrow}/> CONNECT
          </div>
          </NavLink>
        </Selection>
        <Selection>
          <NavLink to='focus'>
          <ScaledImage src={focus}/>
          <div>
            <Icons src={upArrow}/> FOCUS
          </div>
          </NavLink>
        </Selection>
        <Selection>
          <NavLink to='check-in'>
          <ScaledImage src={checkIn}/>
          <div>
            <Icons src={downArrow}/> CHECK-IN
          </div>
          </NavLink>
        </Selection>
        <Selection>
          <NavLink to='gather'>
          <ScaledImage src={gather}/>
          <div>
            <Icons src={rightArrow}/> GATHER
          </div>
          </NavLink>
        </Selection>
      </Options>
      </HashRouter>
    </>
  );
}

export default Home;
