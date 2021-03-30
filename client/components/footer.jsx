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
  border-top: 2px solid grey;

`

const Footer = (props) => {
  return (
    <>
      <BottomMenu>
        <a href='/about' onClick={props.handleView} id='about'>about us</a>
        <a href="/about">about test</a>
        <span>memberships</span>
        <a href="/">Home</a>
        <span>your place</span>
        <span>inbox</span>
        <span>profile</span>
      </BottomMenu>
    </>
  );
}

export default Footer;
