import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function CustomHeaders(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/customheaderscont')
    }}
    >Header</Typography>
  )
}

export default withRouter(CustomHeaders)