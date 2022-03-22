import React from 'react'
import Resume from './Resume'

export default {
  title: 'Resume',
  component: Resume
}

const template = (args) => <Resume {...args} />

export const ShowResumeWithZeroValues = template.bind({})
ShowResumeWithZeroValues.args = {
  getTotalTasks: 0,
  getTotalDays: 0
}

export const ShowResumeWithValues = template.bind({})
ShowResumeWithValues.args = {
  getTotalTasks: 12,
  getTotalDays: 8
}
