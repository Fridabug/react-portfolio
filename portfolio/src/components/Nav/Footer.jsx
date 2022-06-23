import React from 'react';
import { Link } from 'react-router-dom';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai'


function Footer() {
  return (
    <footer className="navbar-dark bg-dark" id="contact"> 
      <ul>
        <li className='nav-item'>
          <Link className='nav-link' target='_blank' to='https://github.com/Fridabug'>
            <BsGithub/>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' target='_blank' to='https://de.linkedin.com/in/friederike-spring'>
            <AiFillLinkedin/>
          </Link>
        </li>
      </ul>

      <p>made on <GiEarthAfricaEurope/> in 2022</p>
    </footer>
   
  )
}

export default Footer