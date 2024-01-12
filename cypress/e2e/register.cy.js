/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when confirm password is empty
 *   - should display alert when password and confirm password do not match
 *   - should display success message when registration is successful
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register'); // Assuming the registration page has a different route
  });

  it('should display register page correctly', () => {
    // Verify elements on the register page
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('input[placeholder="Confirm password"]').should('be.visible');
    cy.get('button').contains(/^Register$/).should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // Click the Register button without entering a name
    cy.get('button').contains(/^Register$/).click();

    // Verify the window.alert to display the expected message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // Enter a name
    cy.get('input[placeholder="Name"]').type('Soqi');

    // Click the Register button without entering an email
    cy.get('button').contains(/^Register$/).click();

    // Verify the window.alert to display the expected message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // Enter a name and email
    cy.get('input[placeholder="Name"]').type('soqi');
    cy.get('input[placeholder="Email"]').type('soqi@gmail.com');

    // Click the Register button without entering a password
    cy.get('button').contains(/^Register$/).click();

    // Verify the window.alert to display the expected message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when password and confirm password do not match', () => {
    // Enter a name, email, password, and mismatched confirm password
    cy.get('input[placeholder="Name"]').type('soqi');
    cy.get('input[placeholder="Email"]').type('soqi@gmail.com');
    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('input[placeholder="Confirm password"]').type('mismatched_password');

    // Click the Register button
    cy.get('button').contains(/^Register$/).click();

    // Verify the window.alert to display the expected message
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Password and Confirm Password do not match');
    });
  });

  it('should display success message when registration is successful', () => {
    // Enter a name, email, and matching password and confirm password
    cy.get('input[placeholder="Name"]').type('soqi');
    cy.get('input[placeholder="Email"]').type('soqi@gmail.com');
    cy.get('input[placeholder="Password"]').type('123456');
    cy.get('input[placeholder="Confirm password"]').type('123456');

    // Click the Register button
    cy.get('button').contains(/^Register$/).click();

    cy.get('input[placeholder="Email"]').type('soqi@gmail.com');


    cy.get('input[placeholder="Password"]').type('123456');

    cy.get('button').contains(/^Login$/).click();

    cy.get('button').contains(/^Logout$/).click();

  });

});
