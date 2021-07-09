/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const StyledFooter = styled.footer`
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLink to="/about">About</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
