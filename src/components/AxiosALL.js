import { Typography } from '@material-ui/core';
import React from 'react'
import { withRouter } from 'react-router-dom';

function AxiosALL(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/axiosallcont')
    }}
    >ALL</Typography>
  )
}

export default withRouter(AxiosALL)