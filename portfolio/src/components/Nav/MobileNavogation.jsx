import NavLinks from './NavLinks';
import {MdMenu, MdClose} from 'react-icons/md';
import {useState} from 'react';

const Navigation = () => {
    const [open, setOpen] = useState(false); 

    const navIconOpen = <MdMenu className='menu-icon' color='white'
    onClick={() => setOpen(!open)}/>

    const navIconClose = <MdClose className='menu-icon' color='white'
    onClick={() => setOpen(!open)}/>

    return (
        <nav className='mobile-navigation'>
            {open ? navIconClose : navIconOpen}
            {open && <NavLinks/>}
           
        </nav>
    );
}

export default Navigation;