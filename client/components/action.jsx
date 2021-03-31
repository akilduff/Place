import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const AboutTitle = styled.div`
  text-align: center;
  width: 100%;
  margin: 4em 0 1em 0;
  font-size: 20px;
  font-weight: 900;
`

const AboutGraph = styled.div`
  width: auto;
  margin: 0 10% 0 10%;
  font-size: 16px;
`

const Action = (props) => {

  let { action } = useParams();
  let actionOptions = ['connect', 'focus', 'check-in', 'gather']
  if (actionOptions.indexOf(action) > -1) {
    return (
      <>
        <AboutTitle>Hello {action}</AboutTitle>
          <br></br>
          <AboutGraph>
            This is a {action} space.
          </AboutGraph>
          <br></br>
      </>
    )
  } else {
    return(
      <>
      </>
    );
  }
}

export default Action;
