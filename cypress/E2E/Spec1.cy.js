// Autocomplete and Cypress type support
/// <reference types="cypress" />

describe("Login Test Suite", () => {
  it('Logs in and verifies page title', () => {
    // Visit the login page
    cy.visit('https://www.saucedemo.com/');

    // Enter valid username and password
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    // Click the login button
    cy.get('[data-test="login-button"]').click();

    // Assert that the page title contains 'Swag Labs'
    cy.title().should('contain', 'Swag Labs');
  });
});
