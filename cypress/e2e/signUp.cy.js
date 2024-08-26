/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Signup', () => {
  
  it('Should be able to signUp', function () {
    cy.visit('https://www.konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y',{force: true}).click()
    cy.get('._1dce2_MjLDv > a').click()
    cy.get('#firstname', {force: true}).type('Qavdev') 
    cy.get('#lastname').type('Limited')
    cy.get('#email').type('paulossxxsx@yopmail.com', {log: false})
    cy.get('#phone').type('08068164990')
    cy.get(':nth-child(6) > #password').type('Monyfirst', {log: false})
    cy.get('.d563b_2w5FH > ._2aac2_3bwnD > ._0a08a_3czMG').click()
})
})
