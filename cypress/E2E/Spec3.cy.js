/// <reference types="cypress" />

describe('Spec3', () => {
    it.only('1- Mouse Actions > Click / Double Click / Right Click', () => {
        // Visit the Actions commands demo page
        cy.visit('https://example.cypress.io/commands/actions');

        // Click the red "Click me" button to trigger a popover
        cy.get('.well > .btn-danger').click();

        // Assert the popover becomes visible and contains expected text
        cy.get('.popover')
            .should('be.visible')
            .and('contain', 'popover shows');
    });
});
