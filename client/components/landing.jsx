import React from 'react';
import styled from 'styled-components';
import focus from '../../Mockups/focus.jpeg';
import gather from '../../Mockups/gather.jpeg';
import checkIn from '../../Mockups/check-in.jpeg';

const Options = styled.section`
  display: grid;
  grid-Template-Columns: repeat(4, minmax(0, 1fr));
  column-gap: 1em;
  width: auto;
  margin: 1% 10% 1% 10%;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
`

const Selection = styled.section`
  display: grid;
  grid-Template-Columns: repeat(1, minmax(0, 1fr));
  grid-Template-Rows: repeat(2, minmax(0, auto));
`

const ScaledImage = styled.img`
  width: 100%;
  object-fit: contain;
`

const Landing = (props) => {
  return (
    <>
      <Options>
        <Selection>
          <span>*White box for the time being*</span>
          <span>CONNECT</span>
        </Selection>
        <Selection>
          <ScaledImage src={focus}/>
          <span>FOCUS</span>
        </Selection>
        <Selection>
          <ScaledImage src={checkIn}/>
          <span>CHECK-IN</span>
        </Selection>
        <Selection>
          <ScaledImage src={gather}/>
          <span>GATHER</span>
        </Selection>
      </Options>
    </>
  );
}

export default Landing;
