import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function Patch(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/patchcont')
    }}
    >Patch</Typography>
  )
}

export default withRouter(Patch)