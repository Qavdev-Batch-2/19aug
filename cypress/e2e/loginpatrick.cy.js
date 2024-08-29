Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Login', () => {
  it('Should be Login', () => {
    cy.visit('https://www.konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y', {waitForAnimations: false}).click()
    cy.get('#username').type('yahiko56@yopmail.com', {log: false})
    cy.get('#password').type('Kisame53#', {log: false})
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG', {force: true}).click()
    })
})