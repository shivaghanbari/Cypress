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
    it('3- Keyboard Actions > Sequences-2 ', () => {
        // go to website
        cy.visit('https://example.cypress.io')

        // find dropdown and click on it
        cy.get('.dropdown-toggle').click()
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('Hello').type("{backspace}.{home}.{del}")
    })

    //combination keys
    it.only('4- Keyboard Actions > Sequences-3 ', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('#inputName').type('Hellp World').focus()
            .realPress(['Meta', 'A'])  // Select all (⌘A)
            .realPress(['Meta', 'X'])  // Cut (⌘X)
            .realPress(['Meta', 'V'])  // Paste (⌘V)
    })
    // add .only for running specific test case
    //clearing text
    it('5- Keyboard Actions > Clear ', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        //by clear
        cy.get('#inputName').type('Hellp World').clear()
        //by select all and del
        cy.get('#inputName').type('Hellp World').type("{selectAll}{del}")
        cy.get('#inputName').type('Hellp World').type("{selectAll}{backspace}")
    })
    it('6- Keyboard Actions > Delay Option', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('#inputName').type('I am writing slowly', {delay: 500})
        cy.get('#inputName').clear()
        cy.get('#inputName').type('I am writing fastly', {delay: 0})
    })
    it('7- Keyboard Actions > Repeat', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        cy.get('#inputName').type('Hello world' .repeat(3))
    })
})