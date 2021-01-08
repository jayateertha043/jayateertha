import React from 'react';
import {Box,Grid} from '@material-ui/core';
import avatar from '../assets/images/avatar.jpg';
const Home = () => {

  return (
    <>
    <Grid container justify="center">
      <Grid item>
      <img alt="avatar" src={avatar} align="center" class="avatar" style={{"margin-top" : "50px"}}/>     
      </Grid>   
    </Grid>
    <Box mt={2} align="center">
      <h2>Hi! 👋 </h2>
      <font style={{fontSize:"24px"}}>I am <h3 style={{color:"tomato"}}>JAYATEERTHA G</h3>A final year B.E Computer Science Student<br /> passionate about learning latest tech, developing applications &amp; BugBounties!!!<br /></font>
    </Box>
    </>
  )
}

export default Home;