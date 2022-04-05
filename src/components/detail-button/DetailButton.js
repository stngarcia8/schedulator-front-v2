import React from 'react'
import PropTypes from 'prop-types'
import { BsFolderCheck } from 'react-icons/bs'
import './DetailButton.scss'

const DetailButton = ({ dayNumber, detailButtonOnClick }) => {
  return (
    <>
      <button
        className='button-details'
        value={dayNumber}
        onClick={(e) => detailButtonOnClick(e)}
      >
        <BsFolderCheck className='button-icon' />
        Ver detalles
      </button>
    </>
  )
}

DetailButton.propType = {
  dayNumber: PropTypes.number,
  detailButtonOnClick: PropTypes.func
}

export default DetailButton
