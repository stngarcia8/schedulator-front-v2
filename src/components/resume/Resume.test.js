import React from 'react'
import { render, screen } from '@testing-library/react'
import Resume from './Resume'

describe('Resume with values should', () => {
  beforeEach(() => render(<Resume getTotalTasks={12} getTotalDays={8} />))

  test('render total task loaded', () => {
    const text = screen.getByText(/12 Tareas cargadas/i)
    expect(text).toBeInTheDocument()
  })

  test('render total days loaded', () => {
    const text = screen.getByText(/Distribución en 8 días/i)
    expect(text).toBeInTheDocument()
  })
})
