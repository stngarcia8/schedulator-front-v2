import React from 'react'
import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'

describe('Task list  component should', () => {
  let task = {
    taskId: 't1',
    taskName: 'Task 1',
    duration: 8
  }
  let tasks = []

  beforeEach(() => {
    tasks = []
    tasks = [...tasks, task]
  })

  test('render one task', () => {
    render(<TaskList tasks={tasks} />)
    const text = screen.getByText(/Task 1/i)
    expect(text).toBeInTheDocument()
  })

  test('render one task duration', () => {
    render(<TaskList tasks={tasks} />)
    const text = screen.getByText(/Duración: 8 hrs/i)
    expect(text).toBeInTheDocument()
  })

  test('render task image', () => {
    const { container } = render(<TaskList tasks={tasks} />)
    const taskImage = container.querySelector('img')
    expect(taskImage).toBeInTheDocument()
  })

  test('render task image with alt property', () => {
    const { container } = render(<TaskList tasks={tasks} />)
    const taskImage = container.querySelector('img')
    expect(taskImage).toHaveAttribute('alt', 'Task 1')
  })

  test('render two tasks', () => {
    task = { ...task, taskId: 't2' }
    render(<TaskList tasks={[...tasks, task]} />)
    const text = screen.getAllByText(/Task 1/i)
    expect(text).toHaveLength(2)
  })
})
