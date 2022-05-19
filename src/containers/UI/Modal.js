import React from 'react'
import classes from '../UI/Modal.module.css'
import ReactDOM from 'react-dom'
function Modal(props) {
    const Backdrop = (props) =>{
        return <div className={classes.backdrop}></div>
    }

    const ModalOverLay = (props) =>{
        return <div className={classes.modal}>{props.children}</div>
    }
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>,document.getElementById('overlay'))}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,document.getElementById('overlay'))}
    </React.Fragment>
  )
}

export default Modal