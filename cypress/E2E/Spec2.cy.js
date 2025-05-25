//autocomplete
/// <reference types = "cypress"/>
describe('Spec2', () => {
    it('1- Keyboard Actions > Type and Enter ', () => {
        // go to website
        cy.visit('https://example.cypress.io')

        // find dropdown and click on it
        cy.get('.dropdown-toggle').click()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('test@example.com{enter}')
    })
    it('2- Keyboard Actions > Sequences-1 ', () => {
        // go to website
        cy.visit('https://example.cypress.io')

        // find dropdown and click on it
        cy.get('.dropdown-toggle').click()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('test@example.com').type("{selectAll}").type("{del}")
            .type('HI').type("{backspace}").type("{home}").type("{del}")
    })
    it('2- Keyboard Actions > Sequences-2 ', () => {
        // go to website
        cy.visit('https://example.cypress.io')

        // find dropdown and click on it
        cy.get('.dropdown-toggle').click()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('HI@Cypress.com').type("{backspace}.{home}.{del}")
    })

    // add .only for running specific test case
    it.only('2- Keyboard Actions > Sequences-3 ', () => {
        cy.visit('https://example.cypress.io')

        cy.get('.dropdown-toggle').click()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('Spec')
            .realPress(['Meta', 'A'])  // Select all (⌘A)
            .realPress(['Meta', 'X'])  // Cut (⌘X)
            .realPress(['Meta', 'V'])  // Paste (⌘V)
    })
})