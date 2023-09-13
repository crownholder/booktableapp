import { Button, Grid, Paper } from '@mui/material'
import React from 'react'

const data = [
  {id:1,name:'Grilled Chicken Platter',description:'Tender grilled chicken breast marinated in a blend of Mediterranean spices ',price:29.99,img:'https://www.eatingwell.com/thmb/1vwGw3ouuk547YHpd98S3n6iuQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45135861-c014d8bde351416f9413493b62091fbe.jpg'},
  {id:2,name:'Greek Souvlaki Skewers',description:' Succulent pieces of marinated beef and lamb skewered and grilled to perfection.',price:9.99,img:'https://www.eatingwell.com/thmb/1vwGw3ouuk547YHpd98S3n6iuQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45135861-c014d8bde351416f9413493b62091fbe.jpg'},
  {id:3,name:'Mediterranean Seafood Paella',description:'A flavorful and aromatic dish featuring a generous mix of fresh seafood',price:19.99,img:'https://www.eatingwell.com/thmb/1vwGw3ouuk547YHpd98S3n6iuQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45135861-c014d8bde351416f9413493b62091fbe.jpg'},
  {id:4,name:'Vegetarian Mediterranean Mezze Platter',description:'A delightful assortment of Mediterranean vegetarian classics.',price:39.99,img:'https://www.eatingwell.com/thmb/1vwGw3ouuk547YHpd98S3n6iuQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/45135861-c014d8bde351416f9413493b62091fbe.jpg'},
]

const Menu = () => {
  return (
    <div style={{marginTop:'5px'}}>
       
        {data.map((item)=>{
          return(
            <Grid className='container' item key={item.id} xs={12} md={6}>
              <Paper style={{background:'#d3e16a50',maxWidth:'75vW',margin:'25px',padding:'12px'}}>
                <h3>{item.name}</h3>
                <img src={item.img} alt='chosen item' style={{width:'30%'}}/><aside><h4>{item.description}....</h4></aside>
                <h4>{item.price}</h4>
                <Button>More</Button>
              </Paper>
            </Grid>
          )
        })}
       

    </div>
  )
}

export default Menu