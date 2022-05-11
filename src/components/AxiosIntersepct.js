import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function AxiosIntersect(props) {
  return (
    <Typography
    onClick={()=>{
        props.history.push('/axiosintersectcont')
    }}
    >Interseptor</Typography>
  )
}

export default withRouter(AxiosIntersect)