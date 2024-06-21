describe('Test de Login en GitHub', () => {
  
  it('PopUp', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(1)').click();
    cy.get('.github').click();
  })

})