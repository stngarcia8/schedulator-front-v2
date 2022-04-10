import { action } from '@storybook/addon-actions'
import React from 'react'
import { DayList } from '..'
import { dayList } from '../../shared/fixtures'

export default {
  title: 'DayList component',
  component: DayList
}

const template = (args) => <DayList {...args} />

export const FirstStory = template.bind({})

FirstStory.args = {
  loading: false,
  days: dayList,
  onClick: action('submited')
}
