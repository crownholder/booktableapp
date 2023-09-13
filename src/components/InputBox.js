import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const InputBox = (props) => {
    const handleChange = (e) => {
        props.setSearchTerm(e.target.value)
    }

  return (
    <div style={{marginTop:'65px',marginLeft:'25px'}}>
    
        <input 
        type='search' 
        name='inputBox' 
        className='inputBox' 
        id='inputBox' 
        style={{borderRadius:'10px'}}
        value={props.searchTerm}
       
        />
        <span><IconButton>
            <Search type="submit"/>
            </IconButton></span>

        </div>
  )
}

export default InputBox