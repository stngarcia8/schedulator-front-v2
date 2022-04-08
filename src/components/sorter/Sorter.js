import React from 'react'
import PropTypes from 'prop-types'
import { OrderType } from '../../shared/contants'
import './Sorter.scss'

const Sorter = ({ actualValue, onChange }) => {
  return (
    <div className='group-controls'>
      <label labelFor='select-order' className='select-label'>Obtener tareas ordenadas por:</label>
      <select id='select-order' aria-label='select-order'>
        <option defaultValue='' value=''>...seleccione orden</option>
        <option value={OrderType.BY_TASK_DURATION}>Duración de tareas</option>
        <option value={OrderType.BY_TASK_PER_DAY}>Cantidad de tareas asignadas al día</option>
      </select>
    </div>
  )
}

Sorter.propTypes = {
  actualValue: PropTypes.string,
  onChange: PropTypes.func
}

export default Sorter
