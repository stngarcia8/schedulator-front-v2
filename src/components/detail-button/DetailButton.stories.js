import { action } from '@storybook/addon-actions'
import React from 'react'
import DetailButton from './DetailButton'

export default {
  title: 'DetailButton component',
  component: DetailButton
}

const template = (args) => <DetailButton {...args} />

export const FirstStory = template.bind({})

FirstStory.args = {
  dayNumber: 1,
  onClick: action('submited')
}
