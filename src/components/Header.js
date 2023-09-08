import React, { useState } from 'react';
import Logo from './lemon.png';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'


const styleImg = {
  width: '80px',
  margin: '25px'
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <AppBar style={{ background: '#d3e16a50' }}>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} style={{color:'white'}}>Home</Link>
            </li>
            <li>
              <Link to="/menu" onClick={toggleMenu} style={{color:'white'}}>Menu</Link>
            </li>
            <li>
              <Link to="/booking" onClick={toggleMenu} style={{color:'white'}}>Book a table</Link>
            </li>
          </ul>
        </div>
        <div className="logo-container" style={{
          background: 'darkgreen',
          display: 'flex',
          flexDirection: 'row',
          color: 'white',
          minHeight: '20vH',
          marginTop: '0px'
        }}><span><div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon fontSize="large"  style={{color:'black'}}/>
      </div></span>
      <img src={Logo} style={{maxWidth:'15vH'}}/><h1>Little Lemon</h1>
        </div>
      </AppBar>
    </div>
  );
}

export default Header;
