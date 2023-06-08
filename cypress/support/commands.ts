export {};

declare namespace Cypress {
  interface Chainable<Subject> {
    mockMatchMedia(): void;
  }
}

Cypress.Commands.add("mockMatchMedia", () => {
  cy.window().then((window) => {
    const mediaQueryStub = cy.stub().returns(false);
    cy.stub(window, "matchMedia").returns({
      matches: mediaQueryStub,
      media: "",
      onchange: null,
      addListener: cy.stub(),
      removeListener: cy.stub(),
      addEventListener: cy.stub(),
      removeEventListener: cy.stub(),
      dispatchEvent: cy.stub(),
    });
    cy.wrap(mediaQueryStub).as("mediaQueryStub");
  });
});
