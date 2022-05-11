import { Typography } from '@material-ui/core';
import React from 'react'
import { withRouter } from 'react-router-dom';

function Get(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/getcont')
    }}
    >GET</Typography>
  )
}

export default withRouter(Get)