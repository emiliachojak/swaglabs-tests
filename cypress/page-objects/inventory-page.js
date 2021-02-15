export class InventoryPage {
  getInventoryContainer() {
    return cy.get("#inventory_container");
  }

  getInventoryPageUrl() {
    return cy.url();
  }

  getProductLabel() {
    return cy.get(".product_label");
  }
}
