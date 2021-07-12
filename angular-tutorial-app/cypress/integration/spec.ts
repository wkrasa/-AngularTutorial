beforeEach(() => {
  cy.visit('/');
});

it('loads examples', () => {
  cy.contains('first works!');
});


it('loads examples', () => {
  cy.get('#cy-second-button').click();
  cy.contains('second works!');
});
