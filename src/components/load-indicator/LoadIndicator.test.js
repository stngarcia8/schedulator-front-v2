import React from 'react'
import { render, screen } from '@testing-library/react'
import LoadIndicator from './LoadIndicator'
import '@testing-library/jest-dom'

describe('LoadIndicator component should', () => {
  test('render title', () => {
    render(<LoadIndicator />)
    const title = screen.getByText('Cargando tareas...')
    expect(title).toBeInTheDocument()
  })
})
