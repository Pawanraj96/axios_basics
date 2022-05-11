import { Typography } from '@material-ui/core';
import React from 'react'
import { withRouter } from 'react-router-dom';

function Post(props) {
  return (
    
    <Typography
    onClick={()=>{
        props.history.push('/postcont')
    }}
    >Post</Typography>
  )
}

export default withRouter(Post)