describe('', () =>{
  beforeEach(() => {
    cy.visit('/');
  });

  it('lazy button contains Lazy text', () => {
    cy.getBySel('lazy').click();
    cy.contains('inner-lazy works!');
  });

  it('user selection works', () => {
    cy.getBySel('lazy').click();
    cy.getBySel('user-buttons').find('button').first().click();
    cy.contains('user name: User 1');
  });

  it('time setup test', () => {
    // cy.server();
    // cy.route({
    //   method: 'GET',
    //   url: 'http://worldclockapi.com/api/json/est/now',
    //   response: { currentFileTime: 1234567890  }
    // })
    cy.intercept('GET', 'http://worldclockapi.com/api/json/est/now', { currentFileTime: 1234567890  } );
    cy.getBySel('lazy').click();
    cy.getBySel('user-buttons').find('button').first().click();
    cy.contains('user name: User 1');
    cy.getBySel('time').contains('1234567890');
  });

  it('get time test', () => {
    //cy.intercept('http://worldclockapi.com/api/json/est/now').as('getTime');

    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://worldclockapi.com/api/json/est/now'
    }).as('getTime');
    cy.getBySel('lazy').click();
    cy.getBySel('user-buttons').find('button').first().click();
    cy.contains('user name: User 1');
    cy.wait('@getTime')
      .its('method').should('equal', 'GET');
    //cy.wait('@getTime').should('have.property','status', 200);
  });
});


