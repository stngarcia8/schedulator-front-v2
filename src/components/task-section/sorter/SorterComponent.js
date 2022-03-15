import React from 'react'
import { useSelector } from 'react-redux'
import { useOrderSelector } from '../../../hooks'
import { SearchType } from '../../../shared/contants'
import './sortercomponent.scss'

const SorterComponent = () => {
  const { search } = useSelector(state => state.uiData)
  const { handleChange } = useOrderSelector()

  return (
    <div className='group-controls'>
      <label>Obtener tareas ordenadas por:</label>
      <select className='select' value={search} onChange={(e) => handleChange(e)}>
        <option value={SearchType.BY_TASK_DURATION}>Duración de tareas</option>
        <option value={SearchType.BY_TASK_PER_DAY}>Cantidad de tareas asignadas al día</option>
      </select>
    </div>
  )
}

export default SorterComponent
