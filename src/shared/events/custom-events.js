import { ANALYTICS_CATEGORY } from '../contants'

export const createAnalyticsCustomEvents = (name, action, label) => {
  return {
    name: name,
    category: ANALYTICS_CATEGORY,
    action: action,
    label: label
  }
}
