describe('Test de Login en GitHub', () => {
  
  it('Contenido', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.github > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/LogInGitHub.png');
    cy.get('.login-option-button.github').invoke('text').then((text) => {
      expect(text.trim()).to.equal('Inicio sesión con GitHub');
    });  
  })

  it('PopUp', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(1)').click();
    cy.get('.github').click();
  })

})