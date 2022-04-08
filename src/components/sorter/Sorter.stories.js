import { action } from '@storybook/addon-actions'
import React from 'react'
import Sorter from './Sorter'
import { OrderType } from '../../shared/contants'

export default {
  title: ' Sorter component',
  component: Sorter
}

const template = (args) => <Sorter {...args} />

export const DefaultValueSelect = template.bind({})
DefaultValueSelect.args = {
  actualValue: '',
  onchange: action('submited')
}

export const OrderByDuration = template.bind({})
OrderByDuration.args = {
  actualValue: OrderType.BY_TASK_DURATION,
  onchange: action('submited')
}

export const OrderByTask = template.bind({})
OrderByTask.args = {
  actualValue: OrderType.BY_TASK_PER_DAY,
  onchange: action('submited')
}
