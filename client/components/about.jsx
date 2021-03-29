import React from 'react';
import styled from 'styled-components';

const AboutTitle = styled.div`
  width: auto;
  margin: 0 10% 0 10%;
  font-size: 24px;
  font-weight: 900;
`

const AboutGraph = styled(AboutTitle)`
  font-size: 16px;
`

const About = (props) => {
  return (
    <>
      <AboutTitle>About Us</AboutTitle>
      <br></br>
      <AboutGraph>
        Place was created to give anyone the ability to work in a flexible, comfortable, and business ready environment. Whether it's just you or a whole team, you will find your Place.
      </AboutGraph>
      <br></br>
    </>
  );
}

export default About;
