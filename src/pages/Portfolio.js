import React from 'react';
import {Typography ,Card,Box, Divider, Grid, CardContent} from '@material-ui/core';
const Portfolio = () => {
  return (
    <div>
      <Typography variant="h4" align="center">ACHIEVEMENTS</Typography>
      <Divider/>
      <Box m={5}>
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <a href={"https://bughunter.withgoogle.com/profile/46aa4887-b189-4d69-bda2-8f2f5fc569be"}>
        <Card><Box p={5} style={{width:"350px",height:"120px"}}>Rewarded and listed in Google Hall of Fames</Box></Card></a>
        </Grid>
        <Grid item>
        <Card><Box p={5} style={{width:"350px",height:"120px"}}>Listed in Microsoft Hall of Fames &nbsp;
        <a href={"https://www.microsoft.com/en-us/msrc/researcher-acknowledgments-online-services-archive"}>2018</a>&nbsp;
        <a href={"https://portal.msrc.microsoft.com/en-us/security-guidance/researcher-acknowledgments-online-services?rtc=1"}>2019-2020</a>
        </Box></Card>
        </Grid>
        <Grid item>
          <a href={"https://hackerone.com/xiaomi/thanks?type=team"}>
        <Card><Box p={5}style={{width:"350px",height:"120px"}}>Rewarded and Listed in Xiaomi Hall of Fames</Box></Card></a>
        </Grid>
        <Grid item>
          <a href={"https://www.bbc.com/backstage/security-disclosure-policy/acknowledgements#2019"}>
        <Card><Box p={5} style={{width:"350px",height:"120px"}}>Listed in BBC Hall of Fames</Box></Card></a>
        </Grid>
        <Grid item>
        <Card><Box p={5} style={{width:"350px",height:"120px"}}>Resposibly Disclosed bugs to various private orgs</Box></Card>
        </Grid>
        <Grid item>
        <Card><Box p={5} style={{width:"350px",height:"120px"}}>Contributed to many open source projects</Box></Card>
        </Grid>
      </Grid>
      </Box>
      <Box m={5}>
      <Typography variant="h4" align="center">PROJECTS</Typography>
      <Divider></Divider>
      <Box m={5}>
        <Grid container justify="center" spacing={1}>

        <Grid item>
          <a href={"https://github.com/jayateertha043/Decentralized-Medical-Records"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">Decentralised Medical Storage</Typography>
              <p>DMR is a innovative healthCare ecosystem built upon Ethereum network and IPFS technology using ReactJS and Material UI for frontend. It gives complete control of your records and lets you decide who can access your records.</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://github.com/jayateertha043/FireOver"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">FireOver</Typography>
              <p>This is a Open Source tool used to takeover Insecure Firebase Databases and automaticaly generate POC to report them,This tool can also delete or redo the POC's done by this tool(remove the data inserted into the database by this tool).</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://play.google.com/store/apps/details?id=com.japps.breachcompilation"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">BREACHCOMPILATION</Typography>
              <p>This App can be used to query Emails,Usernames,Passwords leaked in BreachCompilation DB in darkweb during 2017.</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        
        <Grid item>
          <a href={"https://pwndb2.herokuapp.com/"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">PWNDB2 API</Typography>
              <p>Made a publicly usable API using python and flask to gather leaked Breach Compilation data from darkweb. </p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://play.google.com/store/apps/details?id=com.japps.isstracker"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">ISS TRACKER</Typography>
              <p>Track Realtime location of International Space Station Tracker on a map(satellite view,hybrid view,normal view).</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        <Grid item>
          <a href={"https://play.google.com/store/apps/details?id=com.japps.wastatus"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">Simple Status Saver:Download and Share any Status</Typography>
              <p>View,Download and Share Status from other apps in a single click.</p>
            </CardContent>
            </Box>
          </Card>
          </a>
        </Grid>

        
        <Grid item>
          <a href={"https://play.google.com/store/apps/details?id=com.japps.cryptoprices"}>
          <Card>
            <Box mb={5} style={{width:"350px",height:'150px'}}>
            <CardContent>
              <Typography variant="h6">CryptoPrices</Typography>
              <p>App to display RealTime Top 50 CyptoCurrency rates in a friendly and simple UI </p>
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

export default Portfolio;