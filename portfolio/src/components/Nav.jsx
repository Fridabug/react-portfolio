import React from 'react'
import { Link } from 'react-router-dom';
import { BsStars } from 'react-icons/bs';

function Nav() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className='navbar-brand' to='/'>
          <BsStars />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav'>
              <li className='nav-item'>
              <Link className='nav-link' to='/'>
                  home
              </Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to='/skills'>
                  skill set
              </Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to='/projects'>
                  projects
              </Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                  contact
              </Link>
              </li>
          </ul>
            </div>
    </nav>

  )
}

export default Nav
