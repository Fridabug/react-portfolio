import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { IoMdPlanet } from 'react-icons/io';
import { TbPlanet } from 'react-icons/tb';
import ReactSkill from './skills/ReactSkill';
import RubyOnRails from './skills/RubyOnRails';
import SQL from './skills/SQL';

function Skills() {
const skills = ['React', 'Ruby on Rails', 'SQL'];
  return (
    <section class="skills main" id="skills">
      <h2>SKILL SET</h2>
      <ul className="nav justify-content-center" defaultActiveKey="/react">
        {skills.map((item, i) => {
          return <div className="nav-item nav-tabs">
            <Link className="nav-link" activeClassName="active" to={`/skills/${item.toLowerCase().split(' ').join('-')}`} key={i}>{i % 2 === 0 ? IoMdPlanet : TbPlanet }{item}</Link>
          </div>
        } )}
      </ul>
      <Routes>
        <Route path="/react" element={<ReactSkill/>}/>
        <Route path="/ruby-on-rails" element={<RubyOnRails/>}/>
        <Route path="/sql" element={<SQL/>}/>
      </Routes>
    </section>
  );
}

export default Skills
