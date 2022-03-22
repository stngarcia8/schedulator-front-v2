import React from 'react'
import { render, screen } from '@testing-library/react'
import Presentation from './Presentation'

describe('Presentation component should', () => {
  test('render p tag in the page', () => {
    render(<Presentation />)
    const pTag = document.querySelector('p')
    expect(pTag).toBeInTheDocument()
  })

  test('render presentation text in page', () => {
    render(<Presentation />)
    const text = screen.getByText(/El proposito de esta/i)
    expect(text).toBeInTheDocument()
  })
})
