import React from 'react'
import { Link } from 'react-router-dom';
import { BsStars } from 'react-icons/bs';
import MobileNavigation from './Navigation';
import Navigation from './MobileNavogation';

function Nav() {
  return (
   
    <nav className="nav">
    
      <Link className='logo' to='/'>
          <BsStars />
      </Link>

       <div className='navbar'>
        <MobileNavigation/>
        <Navigation/>
      </div>
    </nav>

  )
}

export default Nav
