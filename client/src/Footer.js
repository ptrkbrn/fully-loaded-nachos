/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const StyledFooter = styled.footer`
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLink to="/about">About</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
