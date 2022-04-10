import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Sorter from './Sorter'
import { OrderType } from '../../shared/contants'

describe('Sorter component should', () => {
  test('render label', () => {
    render(<Sorter />)
    const labelText = screen.getByText(/Obtener tareas ordenadas por/i)
    expect(labelText).toBeInTheDocument()
  })

  test('render select control', () => {
    render(<Sorter />)
    const select = document.querySelector('select')
    expect(select).toBeInTheDocument()
  })

  test('Verify onChange event to task duration option', async () => {
    const onChange = jest.fn()
    const { container } = render(<Sorter actualValue='' onChange={onChange} />)
    const select = container.querySelector('select')
    fireEvent.change(select, { target: { value: OrderType.BY_TASK_DURATION } })
    expect(onChange).toBeCalledTimes(1)
  })

  test('Verify onChange event to task quantity option', async () => {
    const onChange = jest.fn()
    const { container } = render(<Sorter actualValue='' onChange={onChange} />)
    const select = container.querySelector('select')
    fireEvent.change(select, { target: { value: OrderType.BY_TASK_PER_DAY } })
    expect(onChange).toBeCalledTimes(1)
  })
})
