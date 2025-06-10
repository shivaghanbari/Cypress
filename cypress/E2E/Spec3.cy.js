// Autocomplete and Cypress type support for better development experience
/// <reference types="cypress" />

// Define a Page Object class for the section of the Cypress Actions page
// that deals with mouse actions.
class MouseActionsPage { // Renamed for clarity: Appending 'Page' is a common convention
    // Getter for the 'Click me' button that triggers a popover.
    get clickMeButton() {
        return cy.get('.well > .btn-danger');
    }

    // Getter for the popover element that appears after clicking the button.
    get popOverText() {
        return cy.get('.popover');
    }

    // Method to navigate to the Cypress Actions page.
    visitActionsPage() {
        cy.visit('https://example.cypress.io/commands/actions');
    }
}

// Describe block defines a test suite for mouse actions.
describe('Mouse Actions Suite', () => { // More descriptive name for the suite
    // Create an instance of our MouseActionsPage Page Object.
    // It's good practice to name the instance differently from the class to avoid confusion.
    const actionsPage = new MouseActionsPage();

    // beforeEach hook runs before each 'it' test block in this suite.
    // It ensures that we start each test on the correct page.
    beforeEach(() => {
        actionsPage.visitActionsPage(); // Navigate to the Actions page
    })

    // This 'it' block defines a specific test case for mouse actions (click, double click, right click).
    // Note: The provided code only tests 'click', but the title suggests more actions.
    it('1- Click and Verify Popover', () => { // Renamed test for accuracy based on its actions

        // Click the red "Click me" button using the getter from the 'actionsPage' instance.
        actionsPage.clickMeButton.click();

        // Assert that the popover becomes visible and contains the expected text.
        // This verifies that clicking the button successfully triggered the popover.
        actionsPage.popOverText
            .should('be.visible') // Checks if the popover element is visible
            .and('contain', 'popover shows'); // Checks if the popover contains the specific text

        // --- To add Double Click and Right Click tests as per the original title ---
        // These would typically be in separate 'it' blocks or added here with appropriate assertions.
        // For example:
        // actionsPage.doubleClickMeButton.dblclick(); // Assuming you add a getter for a double-clickable element
        // actionsPage.rightClickMeButton.rightclick(); // Assuming you add a getter for a right-clickable element
    });
});