import { LoginPage } from "../page-objects/login-page";

export class MenuUtils {
  cleanUp(login, password) {
    this.login(login, password);
    this.resetApp();
    this.logOut();
  }

  resetApp() {
    const hamburgerMenu = cy.get(".bm-burger-button > button");

    hamburgerMenu.click();

    const resetAppButton = cy.get("#reset_sidebar_link");

    resetAppButton.click();
  }

  logOut() {
    const logoutLink = cy.get("#logout_sidebar_link");

    logoutLink.click();
  }

  login(login, password) {
    const loginPage = new LoginPage();

    loginPage.visit();

    loginPage.inputUsername(login);
    loginPage.inputPassword(password);

    loginPage.clickLoginButton();
  }
}
