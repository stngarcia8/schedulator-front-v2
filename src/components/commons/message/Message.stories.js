import React from 'react'
import Message from './Message'

export default {
  title: 'Message',
  component: Message
}

const template = (args) => <Message {...args} />

export const NotaskHistory = template.bind({})
NotaskHistory.args = {
  messageCode: 0
}

export const NotFoundErrorHistory = template.bind({})
NotFoundErrorHistory.args = {
  messageCode: 404
}

export const InternalServerErrorHistory = template.bind({})
InternalServerErrorHistory.args = {
  messageCode: 500
}
