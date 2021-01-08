import React from 'react';

import {IconButton,Paper,Grid} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Footer = () => {
  return (
    <Paper>
      <Grid container justify="center" style={{position:'absolute',bottom:0}}>
        <Grid item>
          <a href={"https://www.facebook.com/jayateertha043"}>
          <IconButton>
          <FacebookIcon fontSize={"medium"}/>
          </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={"https://github.com/jayateertha043"}>
          <IconButton>
          <GitHubIcon fontSize={"medium"}/>
          </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={"https://twitter.com/JayateerthaG"}>
          <IconButton>
          <TwitterIcon fontSize={"medium"}/>
          </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={"mailto:jayateertha043@gmail.com"}>
          <IconButton>
          <EmailIcon fontSize={"medium"}/>
          </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={"tel:+919789098758"}>
          <IconButton>
          <CallIcon fontSize={"medium"}/>
          </IconButton>
          </a>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer;