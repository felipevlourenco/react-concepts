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
      ReactDOM.render(<ModalBox {...props} />, ref.current)
    } else {
      if (ref.current) {
        ReactDOM.unmountComponentAtNode(ref.current)
        ref.current.parentNode && ref.current.parentNode.removeChild(ref.current)
      }
    }
  }, [props])

  return null
}

export default Modal
