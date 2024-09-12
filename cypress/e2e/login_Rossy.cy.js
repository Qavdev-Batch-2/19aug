/// <reference types="cypress" />

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.konga.com/') 
  })
  
  it('should be able to login', () => {
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    cy.get('#username').type('rosemaryolamide@gmail.com')
    cy.get('#password').type('Ogunyemi20',{log:false})
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
  })
})
