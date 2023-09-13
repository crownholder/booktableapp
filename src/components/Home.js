import React from 'react';
import Profile from './Profile';
import SpecialDinner from './hero.png'
import { Button } from '@mui/material';
const Home = () => {
  return (
    <div>
       
        <Profile/>
       <img src={SpecialDinner} style={{width:'99%'}}/>
       
       <Button variant='contained' style={{background:'green',marginLeft:'125px',marginTop:'25px'}}>Book A Table</Button>
   
    </div>
  )
}

export default Home