import { Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'

function ErrorHand(props) {
  return (
    <Typography
      onClick={() => {
        props.history.push('/errorhandcont')
      }}
    >Error</Typography>
  )
}

export default withRouter(ErrorHand)