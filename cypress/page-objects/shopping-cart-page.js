export class ShoppingCartPage {
  getItemInCartName() {
    return cy.get(".inventory_item_name");
  }

  getItemInCartQuantity() {
    return cy.get(".cart_quantity");
  }

  getRemoveItemButton() {
    return cy.get(".item_pricebar > .btn_secondary");
  }
}
