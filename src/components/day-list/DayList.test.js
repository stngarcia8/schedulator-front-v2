import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DayList from './DayList'
import { dayList } from '../../shared/fixtures'
import '@testing-library/jest-dom'

describe('DayList component should', () => {
  test('render image', () => {
    const onClick = jest.fn()
    const { container } = render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const image = container.querySelector('img')
    expect(image).toBeInTheDocument()
  })

  test('render image with alt property', () => {
    const onClick = jest.fn()
    const { container } = render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('alt', 'task')
  })

  test('render day title', () => {
    const onClick = jest.fn()
    render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const title = screen.getByText('Día 1')
    expect(title).toBeInTheDocument()
  })

  test('render task quantity', () => {
    const onClick = jest.fn()
    render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const text = screen.getByText('Tareas: 1')
    expect(text).toBeInTheDocument()
  })

  test('render detail button', () => {
    const onClick = jest.fn()
    const { container } = render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  test('Checking onClick event', () => {
    const onClick = jest.fn()
    const { container } = render(<DayList loading={false} days={dayList} onClick={onClick} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(1)
  })
})
