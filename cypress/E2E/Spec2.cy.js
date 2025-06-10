// Autocomplete support
/// <reference types="cypress" />
// Renamed the class to be more generic as it covers multiple sections of the example site
class ExampleCypressIOPage {
    // --- Page Elements ---
    get dropdownToggle() {
        return cy.get('.dropdown-toggle'); // Common dropdown if needed from home page
    }

    // Elements specific to /commands/actions
    get emailInput() {
        return cy.get('#email1'); // This element is on the /commands/actions page
    }

    // Elements specific to /commands/querying
    get inputNameInput() {
        return cy.get('#inputName'); // This element is on the /commands/querying page
    }

    // --- Page Navigation Methods ---
    visitHomePage() {
        cy.visit('https://example.cypress.io');
    }

    visitActionsPage() {
        cy.visit('https://example.cypress.io/commands/actions');
    }

    visitQueryingPage() {
        cy.visit('https://example.cypress.io/commands/querying');
    }

    // --- Common Page Actions (can be expanded) ---
    // Example: For typing into the email input on the actions page
    typeIntoEmailInput(text) {
        this.emailInput.type(text);
    }

    // Example: For typing into the name input on the querying page
    typeIntoNameInput(text, options) {
        this.inputNameInput.type(text, options);
    }

    // Example: For clearing the name input on the querying page
    clearNameInput() {
        this.inputNameInput.clear();
    }
}

describe('Keyboard Actions & Input Manipulation Suite', () => {
    const exampleCypressIOPage = new ExampleCypressIOPage();

    // beforeEach will visit the actions page as many of your tests start there.
    // Tests that need a different page will explicitly call visit[Page] method.
    beforeEach(() => {
        exampleCypressIOPage.visitActionsPage();
    });

    it('1- Type and Press Enter', () => {
        // Since beforeEach visits actions page, #email1 should be available
        exampleCypressIOPage.typeIntoEmailInput('test@example.com{enter}');
        // Add assertions here if needed, e.g., to verify form submission or value
    });

    it('2- Keyboard Sequences - Basic Typing', () => {
        // This test also uses the actions page, so beforeEach handles navigation
        exampleCypressIOPage.emailInput
            .type('test@example.com')
            .type('{selectAll}{del}')  // Select and delete all
            .type('HI')
            .type('{backspace}')       // Delete "I"
            .type('{home}')            // Go to beginning
            .type('{del}');            // Delete first char
        // Add assertions to verify the final text or state
    });

    it('3- Keyboard Sequences - Using Navigation Keys', () => {
        // This test also uses the actions page
        exampleCypressIOPage.emailInput
            .type('Hello')
            .type('{backspace}.{home}.{del}');
        // Add assertions
    });

    it('4- Keyboard Sequences - Modifier Keys (Cmd/Meta)', () => {
        // This test needs to visit the querying page explicitly
        exampleCypressIOPage.visitQueryingPage();

        exampleCypressIOPage.inputNameInput
            .type('Hellp World')
            .focus()
            .realPress(['Meta', 'A'])  // Cmd+A: Select all
            .realPress(['Meta', 'X'])  // Cmd+X: Cut
            .realPress(['Meta', 'V']); // Cmd+V: Paste

        // Add assertions, e.g., to verify the text was cut and pasted back
        // exampleCypressIOPage.inputNameInput.should('have.value', 'Hellp World');
    });

    it('5- Clear Input Field Methods', () => {
        // This test needs to visit the querying page
        exampleCypressIOPage.visitQueryingPage();

        // Clear using .clear()
        exampleCypressIOPage.inputNameInput.type('Hellp World').clear();
        exampleCypressIOPage.inputNameInput.should('have.value', ''); // Assert cleared

        // Clear using select all + delete
        exampleCypressIOPage.inputNameInput.type('Hellp World').type('{selectAll}{del}');
        exampleCypressIOPage.inputNameInput.should('have.value', ''); // Assert cleared

        // Clear using select all + backspace
        exampleCypressIOPage.inputNameInput.type('Hellp World').type('{selectAll}{backspace}');
        exampleCypressIOPage.inputNameInput.should('have.value', ''); // Assert cleared
    });

    it('6- Typing with Delay Option', () => {
        // This test needs to visit the querying page
        exampleCypressIOPage.visitQueryingPage();

        // Type slowly
        exampleCypressIOPage.typeIntoNameInput('I am writing slowly', { delay: 500 });
        // Add assertions
        exampleCypressIOPage.clearNameInput(); // Use page object method

        // Type fast
        exampleCypressIOPage.typeIntoNameInput('I am writing fastly', { delay: 0 });
        // Add assertions
    });

    it('7- Repeat Text Using JS String Method', () => {
        // This test needs to visit the querying page
        exampleCypressIOPage.visitQueryingPage();

        // Repeat "Hello world" 3 times
        exampleCypressIOPage.typeIntoNameInput('Hello world'.repeat(3));
        // Add assertions, e.g., to verify the repeated text
        // exampleCypressIOPage.inputNameInput.should('have.value', 'Hello worldHello worldHello world');
    });
});