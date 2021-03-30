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

const Connect = (props) => {

  let { topicID } = useParams();
  console.log('topicID: ', topicID)

  return (
    <>
      <AboutTitle>{topicID}</AboutTitle>
        <br></br>
        <AboutGraph>
          This is a {topicID} space.
        </AboutGraph>
        <br></br>
    </>
  )
}

export default Connect;
