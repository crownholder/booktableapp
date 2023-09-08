import React from 'react'
import Logo from './lemon.png'
import { Link } from 'react-router-dom'
import { AppBar } from '@mui/material'


  const styleImg = {
    width:'80px',
    margin:'25px'
   
  }



const Header = () => {
  return (
    <div>
        <AppBar style={{ background: 'yellow' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Book a table</Link>
            </li>
          </ul>
        </AppBar>
        <div style={{background:'darkgreen',display:'flex', flexDirection:'row',color:'white', minHeight:'20vH',marginTop:'90px'}} >
       <span><img src={Logo} style={styleImg} alt='logo'/></span><h1>Little Lemon</h1>
      </div>
    
      <hr style={{opacity:'25%'}}/>
      
    </div>
  )
}

export default Header



