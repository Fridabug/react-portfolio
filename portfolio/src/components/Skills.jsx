import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdPlanet } from 'react-icons/io';
import { TbPlanet } from 'react-icons/tb';
import ReactSkill from './skills/ReactSkill';
import RubyOnRails from './skills/RubyOnRails';
import SQL from './skills/SQL';
import SkillIntro from './skills/SkillIntro';

function Skills() {
const skills = ['React', 'Ruby on Rails', 'SQL'];
  return (
      <div className="skills main">  
        <h1>Skills</h1> 
        <p>I've got a wide spectrum of experience </p>
        <section id="skills">
        <h2>WEB DEVELOPMENT</h2>
        <ul className="nav justify-content-center">
          {skills.map((item, i) => {
            return <div className="nav-item nav-tabs">
              <Link className="nav-link" activeClassName="active" to={`/skills/${item.toLowerCase().split(' ').join('-')}`} key={i}>{i % 2 === 0 ? IoMdPlanet : TbPlanet }{item}</Link>
            </div>
          } )}
        </ul>
        <Routes>
          <Route index element={<SkillIntro/>}/>
          <Route path="/react" element={<ReactSkill/>}/>
          <Route path="/ruby-on-rails" element={<RubyOnRails/>}/>
          <Route path="/sql" element={<SQL/>}/>
        </Routes>
      </section>
      {/* <section className='main'>
          <h2>ILLUSTRATION</h2>
      </section> */}
    </div>
 
  );
}

export default Skills
