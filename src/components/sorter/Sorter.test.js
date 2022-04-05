import React from 'react'
import { render, screen, createEvent, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import ReduxWrapper from '../../wrappers/ReduxWrapper'
import store from '../../reducers/store'
import Sorter from './Sorter'

describe('Sorter component should', () => {
  beforeEach(() => {
    <ReduxWrapper store={store}>
      render(<Sorter />)
    </ReduxWrapper>
  })

  test('Show a label with selector', () => {
    const text = getByTextContent(/Obtener tareas ordenadas/i)
    expect(text).toBeInTheDocument()
  })
})

// const selectElementInSelect = async (optionTextValue, optionValueProperty) => {
//   await act(() => {
//     const { container } = render(<Sorter />)
//     await screen.findByText(optionTextValue)
//     const selectOne = container.querySelector('.classValue')
//     fireEvent.change(selectOne, { target: { value: optionValueProperty } })

//     const button = container.querySelector('button')
//     const clickEvent = createEvent.click(button, { button: 1 })
//     fireEvent(button, clickEvent)
//   })
// }
