import { InventoryPage } from "./inventory-page";

export class LoginPage {
  visit() {
    cy.visit("/");
  }

  inputUsername(username) {
    const usernameInputField = cy.get("[data-test=username]");
    usernameInputField.type(username);

    return this;
  }

  inputPassword(password) {
    const passwordInputField = cy.get("[data-test=password]");
    passwordInputField.type(password);

    return this;
  }

  clickLoginButton() {
    const loginButton = cy.get("#login-button");
    loginButton.click();

    return new InventoryPage();
  }
}
