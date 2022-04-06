import React from 'react'
import PropTypes from 'prop-types'
import { BsFolderCheck } from 'react-icons/bs'
import './DetailButton.scss'

const DetailButton = ({ dayNumber, onClick }) => {
  return (
    <>
      <button
        className='button-details'
        value={dayNumber}
        onClick={(e) => onClick(e)}
      >
        <BsFolderCheck className='button-icon' />
        Ver detalles
      </button>
    </>
  )
}

DetailButton.propTypes = {
  dayNumber: PropTypes.number,
  onClick: PropTypes.func
}

export default DetailButton
