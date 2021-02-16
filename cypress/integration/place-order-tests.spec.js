import { LoginPage } from "../page-objects/login-page";
import { MenuUtils } from "../utils/menu-utils";

describe("Placing an order test suite", () => {
  let testdata;

  before(() => {
    cy.fixture("login-test-data").then((data) => {
      testdata = data;
    });
  });

  beforeEach(() => {
    const menuUtils = new MenuUtils();

    menuUtils.cleanUp(testdata.correct.login, testdata.correct.password);
  });

  it("Should add chosen item to cart", () => {
    const loginPage = new LoginPage();

    loginPage.visit();

    loginPage.inputUsername(testdata.correct.login);
    loginPage.inputPassword(testdata.correct.password);

    const inventoryPage = loginPage.clickLoginButton();

    const itemPage = inventoryPage.goToChosenByNameItemPage("Backpack");

    itemPage.addItemToCart();

    const shoppingPage = itemPage.goToShoppingCartPage();

    shoppingPage.getItemInCartName().should("contain.text", "Backpack");
    shoppingPage.getItemInCartQuantity().should("contain.text", "1");
    shoppingPage.getRemoveItemButton().should("exist");
  });
});
