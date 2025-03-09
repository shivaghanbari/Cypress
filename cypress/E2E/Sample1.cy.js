//autocomplete
/// <reference types = "cypress"/>
it('Sample 1',  () => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type("standard_user")
  cy.get('[data-test="password"]').type("secret_sauce")
  cy.get('[data-test="login-button"]').click()


})