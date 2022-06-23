import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdPlanet } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { TbPlanet } from 'react-icons/tb';
import { SiRubyonrails } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { SiHeroku } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import ReactSkill from './skills/ReactSkill';
import RubyOnRails from './skills/RubyOnRails';
import SQL from './skills/SQL';
import SkillIntro from './skills/SkillIntro';
import HTMLCSS from './skills/HTML&CSS';

function Skills() {
const skills = ['React', 'Ruby on Rails', 'HTML & CSS'];
  return (
      <div className="skills main">  
        <h1>Skills</h1> 
        <p>I've got a wide spectrum of experience </p>
        <section class="skills-icons">
          <FaReact/> <SiRubyonrails/> <SiJavascript/> <DiRuby/> <DiSass/> <SiPostgresql/>
          <FaBootstrap/> <SiCss3/> <SiHtml5/> <CgFigma/> <SiHeroku/> <FaNode/>
        </section>
        <section id="skills">
        <h2>WEB DEVELOPMENT</h2>
        <ul className="nav-tabs">
          {skills.map((item, i) => {
            return <div className="nav-item">
              <Link className="nav-link" activeClassName="active" to={`/skills/${item.toLowerCase().split(' ').join('-')}`} key={i}>{i % 2 === 0 ? IoMdPlanet : TbPlanet }{item}</Link>
            </div>
          } )}
        </ul>
        <Routes>
          <Route index element={<SkillIntro/>}/>
          <Route path="/react" element={<ReactSkill/>}/>
          <Route path="/ruby-on-rails" element={<RubyOnRails/>}/>
          <Route path="/sql" element={<SQL/>}/>
          <Route path="/html-&-css" element={<HTMLCSS/>}/>
        </Routes>
      </section>
      <section className='main'>
          <h2>ILLUSTRATION</h2>
      </section>
    </div>
 
  );
}

export default Skills
