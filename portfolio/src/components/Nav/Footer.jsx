import React from 'react';
import { Link } from 'react-router-dom';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'
import { MdOutlineLocalPostOffice } from 'react-icons/md';


function Footer() {
  return (
    <footer className="navbar-dark bg-dark" id="contact"> 
      <ul>
        <li class="nav-item">
          <a href="mailto:friederikespring@posteo.de" target="_blank">
            <MdOutlineLocalPostOffice/>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' target='_blank' href='https://github.com/Fridabug'>
            <BsGithub/>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' target='_blank' href='https://de.linkedin.com/in/friederike-spring'>
            <AiFillLinkedin/>
          </a>
        </li>
      </ul>

      <p>made on <GiEarthAfricaEurope/> in 2022</p>
    </footer>
   
  )
}

export default Footer