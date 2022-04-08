import React from 'react'
import TaskList from './TaskList'
import { tasks, task1, task2 } from '../../shared/fixtures'

export default {
  title: 'TaskList component',
  component: TaskList
}

const template = (args) => <TaskList {...args} />

export const OneTaskToRender = template.bind({})
OneTaskToRender.args = { tasks: [...tasks, task1] }

export const TwoTaskToRender = template.bind({})
TwoTaskToRender.args = { tasks: [...tasks, task1, task2] }
