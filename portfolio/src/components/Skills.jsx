import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { IoMdPlanet } from 'react-icons/io';
import { TbPlanet } from 'react-icons/tb';

function Skills() {
const skills = ['React', 'Ruby on Rails', 'Vanilla JS', 'Bootstrap', 'SQL']
const icons = [IoMdPlanet, TbPlanet];
  return (
    <section class="skills main" id="skills">
      <h2>SKILL SET</h2>
      <Nav fill variant="tabs" defaultActiveKey="/React">
        {skills.map((item, i) => {
          return <Nav.Item>
            <Nav.Link key={i}>{item}</Nav.Link>
          </Nav.Item>
        } )}
      </Nav>
    </section>
  )
}

export default Skills