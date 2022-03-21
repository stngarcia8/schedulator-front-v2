import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from './HomePage'

describe('Home page should', () => {
  it('Verify if main container is loaded', () => {
    render(<HomePage />)
    expect(screen.getByText('Hola po dani')).toBeInTheDocument()
  })
})
