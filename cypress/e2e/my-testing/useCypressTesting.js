describe('Basic Topics', () => {
  it('Basic topics cy.visit using', () => {
    cy.visit('/');
    cy.visit('/about'); //if not set baseUrl in cypress.config.js
    cy.visit('http://localhost:5173/about'); //if not set baseUrl in cypress.config.js
    cy.visit({ url: 'http://localhost:5173/', method: 'GET' }); //if not set baseUrl in cypress.config.js
  });

  it('Basic topics cy-title using', () => {
    cy.title().should('eq', 'About'); //if title is About
    cy.title().should('include', 'About'); //if title include About
    cy.title().should('contain', 'About'); //if title contain About
  });

  it('Basic topics cy.url and cy.location using', () => {
    cy.url().should('eq', 'http://localhost:5173/about'); //if url is http://localhost:5173/about
    cy.url().should('include', '/about'); //if url include about

    cy.location('pathname').should('eq', '/about'); // we can confirm the current pathname
    cy.location('protocol').should('eq', 'http:'); // we can confirm the current protocol "http" or "https"
    cy.location('hostname').should('eq', '5173'); // we can confirm the current port
  });
});
