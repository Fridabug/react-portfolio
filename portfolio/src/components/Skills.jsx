import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { IoMdPlanet } from 'react-icons/io';
import { TbPlanet } from 'react-icons/tb';

function Skills() {
const skills = ['React', 'Ruby on Rails', 'Vanilla JS', 'Bootstrap', 'SQL'];
  return (
    <section class="skills main" id="skills">
      <h2>SKILL SET</h2>
      <Nav fill variant="tabs" defaultActiveKey="/skills/react">
        {skills.map((item, i) => {
          return <Nav.Item>
            <Link to={item === "Vanilla JS" ? "/skills/js" : /skills/${item.toLowerCase()}`} key={i}>{i % 2 === 0 ? IoMdPlanet : TbPlanet }{item}</Link>
          </Nav.Item>
        } )}
      </Nav>
      <Routes>
        <Route path="/skills/react" element={<React/>}/>
        <Route path="/skills/ruby-on-rails"/>
        <Route path="/skills/js"/>
        <Route path="/skills/bootstrap"/>
        <Route path="/skills/sql"/>
      </Routes>
    </section>
  );
}

export default Skills
