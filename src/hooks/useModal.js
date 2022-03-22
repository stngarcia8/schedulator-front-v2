import { useState } from 'react'
import PropTypes from 'prop-types'

export const useModal = (initialValue) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const closeModal = () => setIsOpen(false)

  return [isOpen, closeModal]
}

useModal.propTypes = {
  initialValue: PropTypes.bool.isRequired
}
useModal.defaultProps = {
  initialValue: false
}
