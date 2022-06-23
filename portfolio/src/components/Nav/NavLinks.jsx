import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul>
            <li className='nav-item'>
            <Link className='nav-link' to='/'>
                home
            </Link>
            </li>
            <li className='nav-item'>
            <Link className='nav-link' to='/skills'>
                skills
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
    )
}

export default NavLinks;