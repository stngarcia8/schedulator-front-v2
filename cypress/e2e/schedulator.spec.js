describe('Schedulator page should', () => {
  beforeEach(() => cy.visit('/'))

  test('render title', () => {
    cy.get('[name="page-title"]')
      .should('have.text', 'Task Schedulator front')
  })
})
