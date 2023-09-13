import React, { useState } from 'react';
import Logo from './lemon.png';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBox from './InputBox';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar style={{ background: 'darkgreen' }}>
      <Toolbar>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={toggleMenu} style={{ color: 'white' }}>
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                onClick={toggleMenu}
                style={{ color: 'white' }}
              >
                Tables
              </Link>
            </li>
          </ul>
        </div>
    
        <div
          className="logo-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="menu-icon" onClick={toggleMenu}>
            <MenuIcon fontSize="large" style={{ color: 'white' }} />
          </div>
          <div style={{marginLeft:'8px',display:'flex'}}>
          <span><Typography variant='h5' color="white" marginRight="110px">Little Lemon</Typography></span>
          </div>
          
          <IconButton style={{ color: 'black' }}>
            <ShoppingCartIcon  style={{color:'white'}}/>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

