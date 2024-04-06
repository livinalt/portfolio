import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/j.png';
import menu from '../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={closeMenu}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={closeMenu}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={closeMenu}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem' onClick={closeMenu}>Contact</Link>
      </div>
      
      <Link to="contact" smooth={true} offset={-100} duration={500}><button className='contactBtn'>Contact</button></Link>

      <img src={menu} alt="mobile menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={closeMenu}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={closeMenu}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={closeMenu}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
