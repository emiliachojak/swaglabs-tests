import { LoginPage } from "../page-objects/login-page";

describe("Logging in test suite", () => {
  let testdata;

  before(() => {
    cy.fixture("login-test-data").then((data) => {
      testdata = data;
    });
  });

  it("Should login with correct data", () => {
    const loginPage = new LoginPage();

    loginPage.visit();

    loginPage.inputUsername(testdata.correct.login);
    loginPage.inputPassword(testdata.correct.password);

    const inventoryPage = loginPage.clickLoginButton();

    inventoryPage.getInventoryPageUrl().should("include", "/inventory.html");
    inventoryPage.getInventoryContainer().should("exist");
    inventoryPage.getProductLabel().should("have.text", "Products");
  });
});