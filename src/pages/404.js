import React from 'react';
import {Typography,Button} from '@material-ui/core';
import { Link} from 'react-router-dom';


const NotFoundPage = () => {
  return(
    <>
      <Typography>Are You Lost ???</Typography>
      <Button to="/" component={Link}>
        Go Back Home ???
      </Button>
    </>
  )
}

export default NotFoundPage;