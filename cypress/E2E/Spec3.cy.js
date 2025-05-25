/// <reference types = "cypress"/>
describe('Spec3', () => {
    it.only('1- Mouse Actions > Click/Dbl Click/Right Click ', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.well > .btn-danger').click()
        cy.get('.popover')
            .should('be.visible')
            .and('contain', 'popover shows')
    })
})