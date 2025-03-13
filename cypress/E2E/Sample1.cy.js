//autocomplete
/// <reference types = "cypress"/>
describe("suit1", () => {
  it('sample 1', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.title().should('contain', 'Swag Labs');
  })
  it('sample 2', () => {
    cy.visit('https://www.saucedemo.com/');

  })
})