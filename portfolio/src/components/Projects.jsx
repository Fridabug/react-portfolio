import React from 'react'

function Projects() {
  return (
    <section className="projects main" id="projects">
      <h1>Projects</h1>
      <div class="project">
        <div class="project-img">
          <img src="../images/x-agency-screenshot.png" alt=""></img>
        </div>
        <div class="project-txt">
          <p>React</p>
          <p>JSX & SASS</p>
        </div>
      </div>
      <div class="project">
        <div class="project-img">
          <img src="../images/fuchs.png" alt=""></img>
        </div>
        <div class="project-txt">
          <p>Ruby on Rails</p>
          <p>HTML & CSS</p>
          <p>SQLite</p>
        </div>
      </div>
      <div class="project">
        <div class="project-img">
          <img src="../images/bugs.png" alt=""></img>
        </div>
        <div class="project-txt">
          <p>Bootstrap</p>
          <p>HTML & CSS</p>
        </div>
      </div>
      <div class="project">
        <div class="project-img">
          <img src="" alt=""></img>
        </div>
        <div class="project-txt"></div>
      </div>
  </section>
  )
}

export default Projects