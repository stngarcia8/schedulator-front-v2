import { action } from '@storybook/addon-actions'
import React from 'react'
import LoadButton from './LoadButton'

export default {
  title: 'LoadButton component',
  component: LoadButton
}

const template = (args) => <LoadButton {...args} />

export const EnableStory = template.bind({})
EnableStory.args = {
  disableButton: false,
  onClick: action('submited')
}

export const DisableStory = template.bind({})
DisableStory.args = {
  disableButton: true,
  onClick: action('submited')
}
