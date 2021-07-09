/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2em;
  margin: 0 2em;
  box-sizing: border-box;
  text-align: left;
  @media only screen and (min-width: 830px) {
      margin: 0 5em;
  }
`;

function About() {
  return (
    <AboutSection>
      <h2>Who made this?</h2>
      <p>
        I did. My name is&nbsp;
        <a href="https://www.ptrkbrn.com">Patrick Breen</a>
        .
      </p>
      <h2>What&apos;s your stack?</h2>
      <p>Postgres/Node/Express/React. Deployed on Heroku, static image hosting on Backblaze B2.</p>
      <h2>Can I see your code?</h2>
      <p>
        <a href="https://github.com/ptrkbrn/fully-loaded-nachos">Sure.</a>
      </p>
      <h2>Are you affiliated with Netflix or Tim Robinson?</h2>
      <p>Absolutely not.</p>
      <h2>
        I think this app sucks. It&apos;s a bad idea
        and what&apos;s more, you&apos;ve executed it terribly.
        How can I tell you about this personally?
      </h2>
      <a href="mailto:hi@ptrkbrn.com">hi@ptrkbrn.com</a>
      <br />
      <a href="https://www.twitter.com/ptrkbrn">@ptrkbrn</a>
    </AboutSection>
  );
}

export default About;
