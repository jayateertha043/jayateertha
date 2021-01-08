import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import {Box,Grid,IconButton, AppBar , Button, Drawer, Toolbar,List,ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Footer from '../components/Footer';

const NavBar = () => {
    const [isDrawerOpen,setDrawer] = useState(false);
    return (
        <div>
        <Drawer anchor={"bottom"} open={isDrawerOpen} onClose={()=>setDrawer(false)} onClick={()=>setDrawer(false)} class="drawer">
        <List>
        <ListItem>
            </ListItem>
            <ListItem>
            <Button component={Link} to='/' color="white">Home</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to='/portfolio' color="white">Projects and Achievements</Button>
            </ListItem>
            <ListItem>
            <Button component={Link} to='/blogs' color="white">Blogs and Publications</Button>
            </ListItem>
            <ListItem>
            <a href={process.env.PUBLIC_URL + 'assets/JayateerthaResume.pdf'} download><Button>Resume</Button></a>
            </ListItem>      
        </List>
        <Grid>
        <Box mb={7}/>
        <Footer/>
        </Grid>
            

        </Drawer>
            <AppBar>
            <Toolbar>
                <IconButton edge="start" onClick={()=>{
                    setDrawer(!isDrawerOpen);
                    console.log(isDrawerOpen);
                }}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
            </AppBar>
                <div style={{'marginTop':'75px'}}></div>
        </div>
    )
}

export default NavBar;