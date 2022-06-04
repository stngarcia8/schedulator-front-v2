import { ANALYTICS_CATEGORY } from '../contants'

export const analyticsEvents = {
  loadTaskPage: {
    name: 'Load task page',
    category: ANALYTICS_CATEGORY,
    action: 'load task page',
    label: 'Load page'
  },
  clickLoadButton: {
    name: 'Load button click',
    category: ANALYTICS_CATEGORY,
    action: 'Press load button',
    label: 'load tasks'
  },
  getTaskOk: {
    name: 'Load task ok',
    category: ANALYTICS_CATEGORY,
    action: 'get task correctly',
    label: 'load tasks'
  },
  clickTaskDetailButton: {
    name: 'Task detail button click',
    category: ANALYTICS_CATEGORY,
    action: 'Press task detail button',
    label: 'View tasks'
  }
}

export const analyticsExceptions = {
  notFoundException: {
    name: 'Not found exception',
    category: ANALYTICS_CATEGORY,
    action: 'Task not found',
    label: 'exception 404'
  },
  internalServerException: {
    name: 'Internal server exception',
    category: ANALYTICS_CATEGORY,
    action: 'Internal server exception',
    label: 'exception 500'
  }
}
