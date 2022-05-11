import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function Delete(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/deletecont')
    }}
    >DELETE</Typography>
  )
}

export default withRouter(Delete)