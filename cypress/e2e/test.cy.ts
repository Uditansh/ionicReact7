export {};
describe("My First Test", () => {
  beforeEach(() => {
    cy.mockMatchMedia();
  });

  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("@mediaQuery")
      .should("be.calledWith", "(max-width: 600px)")
      .and("return", true);
    cy.contains("#container", "Ready to create an app?");
  });
});
