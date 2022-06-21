import React from 'react'
import { Link } from 'react-router-dom';
import { BsStars } from 'react-icons/bs';

function Nav() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className='navbar-brand' to='/'>
                <BsStars />
            </Link>
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
            
        </div>
    </nav>

  )
}

export default Nav