# Cypress End-to-End Test Suite

This project contains automated end-to-end (E2E) tests using [Cypress](https://www.cypress.io/) for demonstrating real-world web testing scenarios including keyboard actions, mouse interactions, and UI validations.

---

## 📌 Project Goals

- Demonstrate Cypress basics and advanced features
- Test user interactions like typing, clicking, copy/paste, and clearing input fields
- Showcase Cypress best practices for UI and input testing
- Provide a learning-friendly reference for QA automation using Cypress

---

## 🧰 Tech Stack

- **Testing Framework:** Cypress
- **Plugins Used:**  
  - [`cypress-real-events`](https://github.com/dmtrKovalenko/cypress-real-events) – for real keyboard/mouse events

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project

cypress/
├── e2e/
│   ├── Spec1.cy.js          # Sample test
│   ├── Spec2.cy.js          # Keyboard action tests
│   └── Spec3.cy.js          # Mouse and popover tests
├── support/
│   ├── e2e.js               # Custom commands & plugin setup
│   └── commands.js          # (Optional) custom command definitions
├── fixtures/                # Test data (JSON)
cypress.config.js            # Cypress configuration file
