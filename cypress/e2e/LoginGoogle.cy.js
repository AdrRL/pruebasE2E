describe('Test de Login en Google', () => {
  
  it('PopUp', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(1)').click();
    cy.get('.google').click();
  })

})