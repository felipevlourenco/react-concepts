import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const ModalBox = props => {
  const handleClickContainer = event => {
    event.stopPropagation()
  }

  return (
    <div className={props.isOpen ? 'modal-open' : 'modal-close'} onClick={props.handleClose}>
      <div className="container" onClick={handleClickContainer}>
        <span>{props.text}</span>
        <button onClick={props.handleClose}>Close</button>
      </div>
    </div>
  )
}

const Modal = props => {
  const ref = useRef(null)

  useEffect(() => {
    if (props.isOpen) {
      ref.current = document.createElement('div')
      document.body.appendChild(ref.current)
      document.body.style = 'overflow-y:hidden; position: relative;'
      ReactDOM.render(<ModalBox {...props} />, ref.current)
    } else {
      if (ref.current) {
        if (ref.current.parentNode) {
          ref.current.parentNode.style = 'overflow-y:visible; position: static;'
          ref.current.parentNode.removeChild(ref.current)
        }
        ReactDOM.unmountComponentAtNode(ref.current)
      }
    }
  }, [props])

  return null
}

export default Modal
