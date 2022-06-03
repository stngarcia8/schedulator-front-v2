import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation()
  }

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={(e) => handleModalContainerClick(e)}>
      <div className='modal-container' onClick={handleModalContainerClick}>
        {children}
      </div>
    </article>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.bool.isRequired
}

Modal.defaultProps = {
  isOpen: false,
  closeModal: false
}

export default Modal
