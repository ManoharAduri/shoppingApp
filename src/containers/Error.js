import React from 'react'
import classes from './Error.module.css'

function Error(props) {
  return (
    <div className={classes.error}>{props.message}</div>
  )
}

export default Error