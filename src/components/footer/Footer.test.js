import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component should', () => {
  test('render footer tag in page', () => {
    render(<Footer />)
    const footerTag = document.querySelector('footer')
    expect(footerTag).toBeInTheDocument()
  })
  test('render first line in footer component', () => {
    render(<Footer />)
    const text = screen.getByText(/Task Schedulator Front - desarrollado por Daniel García Loyola/i)
    expect(text).toBeInTheDocument()
  })

  test('render second line in footer', () => {
    render(<Footer />)
    const text = screen.getByText(/Desafío Banco Internacional/i)
    expect(text).toBeInTheDocument()
  })

  test('render third line in footer component', () => {
    render(<Footer />)
    const text = screen.getByText(/© 2022./)
    expect(text).toBeInTheDocument()
  })
})
