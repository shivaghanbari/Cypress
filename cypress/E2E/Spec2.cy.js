// Autocomplete support
/// <reference types="cypress" />

describe('Spec2 - Keyboard Actions Suite', () => {

    it('1- Type and Press Enter', () => {
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();

        // Direct navigation to actions page
        cy.visit('https://example.cypress.io/commands/actions');

        // Type email and press Enter
        cy.get('#email1').type('test@example.com{enter}');
    });

    it('2- Keyboard Sequences - Basic Typing', () => {
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
            .type('test@example.com')
            .type('{selectAll}{del}')  // Select and delete all
            .type('HI')
            .type('{backspace}')       // Delete "I"
            .type('{home}')            // Go to beginning
            .type('{del}');            // Delete first char
    });

    it('3- Keyboard Sequences - Using Navigation Keys', () => {
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.visit('https://example.cypress.io/commands/actions');

        cy.get('#email1')
            .type('Hello')
            .type('{backspace}.{home}.{del}');
    });

    it('4- Keyboard Sequences - Modifier Keys (Cmd/Meta)', () => {
        cy.visit('https://example.cypress.io/commands/querying');

        cy.get('#inputName')
            .type('Hellp World')
            .focus()
            .realPress(['Meta', 'A'])  // Cmd+A: Select all
            .realPress(['Meta', 'X'])  // Cmd+X: Cut
            .realPress(['Meta', 'V']); // Cmd+V: Paste
    });

    it('5- Clear Input Field Methods', () => {
        cy.visit('https://example.cypress.io/commands/querying');

        // Clear using .clear()
        cy.get('#inputName').type('Hellp World').clear();

        // Clear using select all + delete
        cy.get('#inputName').type('Hellp World').type('{selectAll}{del}');
        cy.get('#inputName').type('Hellp World').type('{selectAll}{backspace}');
    });

    it('6- Typing with Delay Option', () => {
        cy.visit('https://example.cypress.io/commands/querying');

        // Type slowly
        cy.get('#inputName').type('I am writing slowly', { delay: 500 });

        // Clear and type fast
        cy.get('#inputName').clear();
        cy.get('#inputName').type('I am writing fastly', { delay: 0 });
    });

    it('7- Repeat Text Using JS String Method', () => {
        cy.visit('https://example.cypress.io/commands/querying');

        // Repeat "Hello world" 3 times
        cy.get('#inputName').type('Hello world'.repeat(3));
    });

});
