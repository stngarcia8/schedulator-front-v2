import React from 'react'
import { render, screen } from '@testing-library/react'
import Message from './Message'

describe('Message component with message code 0 should', () => {
  beforeEach(() => render(<Message messageCode={0} />))

  test('render "No hay tareas disponibles" when messageCode is 0', () => {
    const text = screen.getByText(/No hay tareas disponibles/i)
    expect(text).toBeInTheDocument()
  })

  test('render image in the page', () => {
    const imgTag = document.querySelector('img')
    expect(imgTag).toBeInTheDocument()
  })

  test('render image with "No hay tareas disponibles" in alt property', () => {
    const altText = screen.getByAltText('No hay tareas disponibles')
    expect(altText).toBeInTheDocument()
  })

  test('render p tag in the page', () => {
    const pTag = document.querySelector('p')
    expect(pTag).toBeInTheDocument()
  })

  test('render text with no task legend', () => {
    const text = screen.getByText(/En estos momentos no hay tareas/i)
    expect(text).toBeInTheDocument()
  })
})

describe('render message with 404 code should', () => {
  beforeEach(() => render(<Message messageCode={404} />))

  test('render "Un error ha ocurrido" when messageCode is 404', () => {
    const text = screen.getByText(/Un error ha ocurrido/i)
    expect(text).toBeInTheDocument()
  })

  test('render image with "Un error ha ocurrido" in alt property', () => {
    const altText = screen.getByAltText('Un error ha ocurrido')
    expect(altText).toBeInTheDocument()
  })

  test('render text with error 404 legend', () => {
    const text = screen.getByText(/No ha sido posible cargar tareas/i)
    expect(text).toBeInTheDocument()
  })
})

describe('render message with 500 code should', () => {
  beforeEach(() => render(<Message messageCode={500} />))

  test('render "Un error ha ocurrido" when messageCode is 500', () => {
    const text = screen.getByText(/Un error ha ocurrido/i)
    expect(text).toBeInTheDocument()
  })

  test('render image with "Un error ha ocurrido" in alt property with 500 message code', () => {
    const altText = screen.getByAltText('Un error ha ocurrido')
    expect(altText).toBeInTheDocument()
  })

  test('render text with error 500 legend', () => {
    const text = screen.getByText(/El servidor de tareas no se encuentra disponible/i)
    expect(text).toBeInTheDocument()
  })
})
