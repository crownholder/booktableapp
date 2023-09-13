import React from 'react';
import Profile from './Profile';
import SpecialDinner from './hero.png'
import { Button } from '@mui/material';
const Home = () => {
  return (
    <div>
       
        <Profile/>
       <img src={SpecialDinner} style={{width:'99%'}}/>
       
       
    </div>
  )
}

export default Home