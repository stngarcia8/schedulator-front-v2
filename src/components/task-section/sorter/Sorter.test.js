import React from 'react'
import { render, screen } from '@testing-library/react'
import ReduxWrapper from '../../../wrappers/ReduxWrapper'
import store from '../../../reducers/store'
import Sorter from './Sorter'

describe('Sorter component should', () => {
  const getByTextContent = (text) => {
    return screen.getByText((content, element) => {
      const hasText = element => element.textContent === text
      const elementHasText = hasText(element)
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child))
      return elementHasText && childrenDontHaveText
    })
  }

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
