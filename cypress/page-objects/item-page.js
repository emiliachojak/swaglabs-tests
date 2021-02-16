import { ShoppingCartPage } from "./shopping-cart-page";

export class ItemPage {
  getItemFullName() {
    return cy.get(".inventory_details_name");
  }

  addItemToCart() {
    const addToCartButton = cy.get(".btn_primary");
    addToCartButton.click();

    return this;
  }

  goToShoppingCartPage() {
    const shoppingCartIcon = cy.get("path");
    shoppingCartIcon.click();

    return new ShoppingCartPage();
  }
}
