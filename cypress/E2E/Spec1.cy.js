// Autocomplete and Cypress type support
/// <reference types="cypress" />

// Define a Page Object class for the Sauce Labs Login Page.
// This class encapsulates all elements and actions related to this specific page.
class LoginPage { // Renamed from 'LinkedPage' to be more descriptive of the page's purpose
  // Getter for the username input field.
  // Using a getter ensures the element is always fresh when accessed.
  get usernameInput() { // Renamed for clarity and consistency with common conventions
    return cy.get('[data-test="username"]');
  }

  // Getter for the password input field.
  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  // Getter for the login button.
  get loginButton() {
    return cy.get('[data-test="login-button"]'); // Corrected data-test attribute as per Sauce Demo HTML
  }
  // Method to perform the login action with provided credentials.
  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  // Method to visit the login page URL.
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }
}

// Describe block defines a test suite for the Login functionality.
describe("Login Test Suite", () => {
  // Create an instance of our LoginPage Page Object.
  // We use a different variable name (loginPage) than the class name (LoginPage)
  // to avoid confusion and ensure correct scope.
  const loginPage = new LoginPage();

  // beforeEach hook runs before each 'it' test block in this suite.
  // It ensures that we start each test with a clean state on the login page.
  beforeEach(() => {
    loginPage.visit(); // Calls the visit method of our page object instance
  });

  // This 'it' block defines a specific test case: "Logs in and verifies page title".
  it('Logs in and verifies page title', () => {
    // Enter valid username and password using methods/getters from the loginPage instance.
    loginPage.usernameInput.type("standard_user");
    loginPage.passwordInput.type("secret_sauce");

    // Click the login button using the getter from the loginPage instance.
    loginPage.loginButton.click();

    // Assert that the page title contains 'Swag Labs' after successful login.
    // This verifies that the login action was successful and the user is on the expected page.
    cy.title().should('contain', 'Swag Labs');

    // Add more assertions here to verify elements on the next page (e.g., product list)
    cy.get('.title').should('have.text', 'Products');
  });

  // Example of another test case (e.g., for invalid login)

  it('Displays error for invalid credentials', () => {
    loginPage.login('locked_out_user', 'secret_sauce'); // Using a user that should fail

    // Assert that an error message is displayed
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });
});