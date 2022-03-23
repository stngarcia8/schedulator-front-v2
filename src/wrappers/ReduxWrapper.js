import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const ReduxWrapper = ({ children, store }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

ReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.object
}

export default ReduxWrapper
