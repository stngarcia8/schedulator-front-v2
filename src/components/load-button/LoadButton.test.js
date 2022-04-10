import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import LoadButton from './LoadButton'
import { act } from 'react-dom/test-utils'

describe('LoadButton component should', () => {
  test('render load button', () => {
    const onClick = jest.fn()
    render(<LoadButton disabled={false} onClick={onClick} />)
    const button = screen.getByText('Cargar tareas')
    expect(button).toBeInTheDocument()
  })

  test('render button icon', () => {
    const onClick = jest.fn()
    const { container } = render(<LoadButton disabled={false} onClick={onClick} />)
    const buttonIcon = container.querySelector('svg')
    expect(buttonIcon).toBeInTheDocument()
  })

  test('verify onclick event', () => {
    const onClick = jest.fn()
    render(<LoadButton disabled={false} onClick={onClick} />)
    const button = screen.getByText('Cargar tareas')
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(1)
  })

  test('render in enable mode', () => {
    const onClick = jest.fn()
    render(<LoadButton disabled={false} onClick={onClick} />)
    const button = screen.getByText('Cargar tareas')
    expect(button).toBeEnabled()
  })
})
