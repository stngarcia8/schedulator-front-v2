import React from 'react'
import PropTypes from 'prop-types'
import { OrderType } from '../../shared/contants'
import './Sorter.scss'

const Sorter = ({ onChange }) => {
  return (
    <div className='group-controls'>
      <label>Obtener tareas ordenadas por:</label>
      <select className='select' onChange={(e) => onChange(e)}>
        <option defaultValue='' value=''>...seleccione orden</option>
        <option value={OrderType.BY_TASK_DURATION}>Duración de tareas</option>
        <option value={OrderType.BY_TASK_PER_DAY}>Cantidad de tareas asignadas al día</option>
      </select>
    </div>
  )
}

Sorter.propTypes = {
  onChange: PropTypes.func
}

export default Sorter
