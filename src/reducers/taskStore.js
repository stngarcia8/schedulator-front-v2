import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { taskReducer } from './taskReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  taskData: taskReducer
})

export const taskStore = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )

)


