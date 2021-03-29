import React from 'react';
import styled from 'styled-components';
import focus from '../../Mockups/focus.jpeg';
import gather from '../../Mockups/gather.jpeg';
import checkIn from '../../Mockups/check-in.jpeg';
import upArrow from '../../Mockups/up-arrow.png';
import leftArrow from '../../Mockups/left-arrow.png';
import rightArrow from '../../Mockups/right-arrow.png';
import downArrow from '../../Mockups/down-arrow.png';


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

const Selection = styled.section`
  display: grid;
  grid-Template-Columns: repeat(1, minmax(0, 1fr));
  grid-Template-Rows: repeat(2, minmax(0, auto));
  text-align: center;
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

const Landing = (props) => {
  return (
    <>
      <Options>
        <Selection>
          <span>*White box for the time being. Image to be provided later*</span>
          <div>
            <Icons src={leftArrow}/> CONNECT
          </div>
        </Selection>
        <Selection>
          <ScaledImage src={focus}/>
          <div>
            <Icons src={upArrow}/> FOCUS
          </div>
        </Selection>
        <Selection>
          <ScaledImage src={checkIn}/>
          <div>
            <Icons src={downArrow}/> CHECK-IN
          </div>
        </Selection>
        <Selection>
          <ScaledImage src={gather}/>
          <div>
            <Icons src={rightArrow}/> GATHER
          </div>
        </Selection>
      </Options>
    </>
  );
}

export default Landing;
