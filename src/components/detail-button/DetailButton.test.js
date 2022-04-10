import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DetailButton from './DetailButton'

describe('DetailButton component should', () => {
  test('render button', () => {
    const onClick = jest.fn()
    render(<DetailButton dayNumber={1} onClick={onClick} />)
    const buttonText = screen.getByText('Ver detalles')
    expect(buttonText).toBeInTheDocument()
  })

  test('render button icon', () => {
    const onClick = jest.fn()
    const { container } = render(<DetailButton dayNumber={1} onClick={onClick} />)
    const buttonIcon = container.querySelector('svg')
    expect(buttonIcon).toBeInTheDocument()
  })

  test('checking onClick event', () => {
    const onClick = jest.fn()
    const { container } = render(<DetailButton dayNumber={1} onClick={onClick} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(onClick).toBeCalledTimes(1)
  })
})
