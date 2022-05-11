import { Typography } from '@material-ui/core';
import React from 'react'
import { withRouter } from 'react-router-dom';

function CancelToken(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/canceltokencont')
    }}
    >CancelToken</Typography>
  )
}

export default withRouter(CancelToken)