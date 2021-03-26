import React from 'react';
import styled from 'styled-components';

const BottomMenu = styled.section`
  display: grid;
  grid-Template-Columns: repeat(7, minmax(0, 1fr));
  grid-auto-flow: row;
  width: auto;
  margin: 0 10% 0 10%;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
`

const Footer = (props) => {
  return (
    <>
      <BottomMenu>
        <span>about us</span>
        <span>locations</span>
        <span>memberships</span>
        <span>HOME</span>
        <span>your place</span>
        <span>inbox</span>
        <span>profile</span>
      </BottomMenu>
    </>
  );
}

export default Footer;
