describe('', () =>{
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads examples', () => {
    cy.contains('first works!');
  });


  it('loads examples', () => {
    cy.getBySel('second-button').click();
    cy.contains('second works!');
  });

  it('lazy button contains Lazy text', () => {
    cy.getBySel('lazy').contains('Lazy');
  });
});


