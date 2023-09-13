import React from 'react';
import { Avatar } from "@mui/material";
import Photo from  './10-profile-picture-ideas-to-make-you-stand-out.webp'
const Profile = () => {
  return (
    <div style={{
      marginTop:'5px'
    }}>
        <div style={{display:'inline-flex'}}>
        <Avatar src={Photo} style={{margin:'25px'}}/> <aside><p>Welcome, Thomas</p></aside>
        </div>
        <img src=''/>
    </div>
  )
}

export default Profile
