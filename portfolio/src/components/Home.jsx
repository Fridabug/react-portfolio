import React from 'react';
import Planets from './Planets';

function Home() {
  return (
    <div className='main'>
      <section class="top">
        {/* <!-- Intro --> */}
        <div class="intro">
          <h1>Hey, I'm <span>Frida</span>.</h1>
          <h1>I'm a Full Stack Developer building digital solutions.</h1>
          <p>Let's work on a project together.</p>
        </div>
        <Planets/>
      </section>  
    {/* about me */}
      <section class="about-me" id="about-me">
        <div class="about-me-img">
        </div>
        <div class="about-me-txt">
          <h3>A BIT ABOUT ME</h3>
          <p>
            I am an experienced illustrator and skillful web developer. I work responsibly and I am team-oriented. Staying
            motivated and curious facing problems is one of my strong features. Teamwork boosts my productivity. I enjoy
            exploring possibilities and finding elegant solutions.
            My human interactions are shaped by empathy. As with my ability to provide constructive criticism, receive it,
            and take it to heart.
          </p>
        </div>
       </section>
    </div>
  )
}

export default Home