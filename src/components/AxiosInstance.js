import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function AxiosInstance(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/AxiosInstancecont')
    }}
    >Instance Get</Typography>
  )
}

export default withRouter(AxiosInstance)