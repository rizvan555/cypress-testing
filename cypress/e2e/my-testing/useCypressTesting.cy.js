describe('Basic Topics', () => {
  it('cy.visit using', () => {
    cy.visit('/');
    cy.visit('/about'); //if not set baseUrl in cypress.config.js
    cy.visit('http://localhost:5173/about'); //if not set baseUrl in cypress.config.js
    cy.visit({ url: 'http://localhost:5173/', method: 'GET' }); //if not set baseUrl in cypress.config.js
  });

  it('cy.title using', () => {
    cy.title().should('eq', 'About'); //if title is About
    cy.title().should('include', 'About'); //if title include About
    cy.title().should('contain', 'About'); //if title contain About
  });

  it('cy.url and cy.location using', () => {
    cy.url().should('eq', 'http://localhost:5173/about'); //if url is http://localhost:5173/about
    cy.url().should('include', '/about'); //if url include about

    cy.location('pathname').should('eq', '/about'); // we can confirm the current pathname
    cy.location('protocol').should('eq', 'http:'); // we can confirm the current protocol "http" or "https"
    cy.location('hostname').should('eq', '5173'); // we can confirm the current port
  });

  it('cy.get using', () => {
    cy.get('#button');
    cy.get('#button').as('myButton'); // we can use alias and we can call our element with @myButton
    cy.get("a[href='localhost:3000/about']");
    cy.get('.dropdown-menu-list');
    cy.get('div.button');
    cy.get('ul li:first-child');
  });

  // it.skip('cy.get using', () => { //we can skip this test(this test will not run)
  //   cy.get('#button');
  //   cy.get('#button').as('myButton');
  //   cy.get("a[href='localhost:3000/about']");
  //   cy.get('.dropdown-menu-list');
  //   cy.get('div.button');
  //   cy.get('ul li:first-child');
  // });

  // it.only('cy.get using', () => { //only this test will run
  //   cy.get('#button');
  //   cy.get('#button').as('myButton');
  //   cy.get("a[href='localhost:3000/about']");
  //   cy.get('.dropdown-menu-list');
  //   cy.get('div.button');
  //   cy.get('ul li:first-child');
  // });

  it('cy.log using', () => {
    cy.log('I am a log'); // we can use log when we want to see something in the console
  });
});
