describe('Test de Login en Google', () => {
  
  it('Contenido', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.google > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/LogInGoogle.png');
    cy.get('.login-option-button.google').invoke('text').then((text) => {
      expect(text.trim()).to.equal('Inicio sesión con Google');
    });  
  })

  it('PopUp', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(1)').click();
    cy.get('.google').click();
  })

})