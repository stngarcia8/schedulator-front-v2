import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component should', () => {
  test('render title in header', () => {
    render(<Header />)
    const title = screen.getByText(/Task Schedulator front/i)
    expect(title).toBeInTheDocument()
  })

  test('render logo in header', () => {
    render(<Header />)
    const logo = document.querySelector('img')
    expect(logo).toBeInTheDocument()
  })

  test('render logo with alt property in header', () => {
    render(<Header />)
    const logo = screen.getByAltText(/Task schedulator/i)
    expect(logo).toBeInTheDocument()
  })
})
