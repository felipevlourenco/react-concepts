import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const ModalBox = props => {
  const handleModalClick = event => {
    event.stopPropagation()
  }

  return (
    <div className={props.isOpen ? 'modal-open' : 'modal-close'} onClick={props.handleClose}>
      <span onClick={handleModalClick}>{props.text}</span>
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
