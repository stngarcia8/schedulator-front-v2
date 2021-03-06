import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { taskReducer, uiReducer } from '.'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  taskData: taskReducer,
  uiData: uiReducer
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )

)
