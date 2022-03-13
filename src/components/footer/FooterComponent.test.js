import React from 'react'
import { render } from '@testing-library/react'
import FooterComponent from './FooterComponent'

it * 'test footer', () => {
  const queryByTest = render(<FooterComponent />)
  const text = queryByTest('/texto/i')
  expect(text).toBeInTheDocument()
}
