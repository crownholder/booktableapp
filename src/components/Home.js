import React from 'react'
import Header from './Header'
import { Grid } from '@mui/material'
import HeadImg from './Untitled.png'

const Home = () => {
  return (
    <div>
        <h5 style={{margin:'25px'}}>Home</h5>
        <Grid>
            <img src={HeadImg} style={{minWidth:'60vW',maxHeight:'73vH'}}/>
        </Grid>
   
    </div>
  )
}

export default Home