/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';

function About() {
  return (
    <section>
      <h1>Who made this?</h1>
      <p>
        I did. My name is
        <a href="https//www.ptrkbrn.com">Patrick Breen</a>
        .
      </p>
      <h1>What&apos;s your stack?</h1>
      <p>Postgres/Node/Express/React. Deployed on Heroku, static image hosting on Backblaze B2.</p>
      <h1>Can I see your code?</h1>
      <p>
        <a href="https://wwww.https://github.com/ptrkbrn/fully-loaded-nachos">Sure.</a>
      </p>
      <h1>Are you affiliated with Netflix or Tim Robinson?</h1>
      <p>Absolutely not.</p>
      <h1>
        I think this app sucks. It&apos;s a bad idea
        and what&apos;s more, you&apos;ve executed it terribly.
        How can I tell you about this personally?
      </h1>
      <a href="mailto:hi@ptrkbrn.com">hi@ptrkbrn.com</a>
      <a href="https://www.twitter.com/ptrkbrn">@ptrkbrn</a>
    </section>
  );
}

export default About;
