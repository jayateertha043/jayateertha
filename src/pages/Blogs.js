import React from 'react';
import {Typography , Card, Box, Divider, Grid, CardContent} from '@material-ui/core';
const Blogs = () => {

  return (
    <div>
      <Box m={5}>
      <Typography variant="h3" align="center">Blogs and publicatIons:</Typography>
      <Divider></Divider>
      <Box m={5}>
        <Grid container justify="center" spacing={1}>

        <Grid item>
          <a href={"https://jayateerthag.medium.com/grafana-admin-panel-bypass-in-google-acquisition-virustotal-c5ecc9d7b8ae"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">Grafana Admin Panel bypass in Google Acquisition(VirusTotal)</Typography>
              <p>This is a blog about grafana admin panel bypass that I found in a Google acquisition and rewarded</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://medium.com/@jayateerthag/google-referer-leak-bug-434f6293ce66"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">Google Referer Leakage Bug</Typography>
              <p>This is an article published in Medium.com about a referer leakage bug I found in Google and got rewarded. </p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://medium.com/@jayateerthag/multiple-xss-in-skype-com-81d65919ed24"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">XSS in Microsoft part(1)</Typography>
              <p>This is a blog about a critical XSS bug that I found in SKYPE(MICROSOFT).</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://medium.com/@jayateerthag/multiple-xss-in-skype-com-2-18cfed39edbd"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">XSS in Microsoft part(2)</Typography>
              <p>This is a blog about a critical XSS bug that I found in SKYPE(MICROSOFT) - PART 2</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        
        <Grid item>
          <a href={"https://medium.com/@jayateerthag/whatsapp-profile-photo-leakage-bug-a32f68062b32"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">WhatsApp Profile Photo Leakage Bug</Typography>
              <p>This is an article about WhatsApp Profile Photo Leakage bug that I found on 2020.</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://medium.com/@jayateerthag/cors-bug-on-googles-404-page-rewarded-2163d58d3c8b"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">CORS on Google's 404 pages(rewarded)</Typography>
              <p>This is an article about CORS bug that I found in Kaggle(Google's aquisition).</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>
        <Grid item>
          <a href={"https://medium.com/@jayateerthag/cors-bug-on-googles-404-page-rewarded-2163d58d3c8b"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'100px'}}>
            <CardContent>
              <Typography variant="h6">RTLO Browser Bug in Downloads</Typography>
              <p>This is an article about RTLO bug that I found in private program in HackerOne platform.</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>
        </Grid>
      </Box>
      </Box>
    </div>
  )
}

export default Blogs;