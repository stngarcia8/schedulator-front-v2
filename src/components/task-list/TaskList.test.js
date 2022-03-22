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

  test('render two tasks', () => {
    task = { ...task, taskId: 't2' }
    render(<TaskList tasks={[...tasks, task]} />)
    const text = screen.getAllByText(/Task 1/i)
    expect(text).toHaveLength(2)
  })
})
