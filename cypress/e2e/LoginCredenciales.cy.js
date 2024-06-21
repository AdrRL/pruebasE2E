describe('Test de Login', () => {
  
  it('Login correcto', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('[type="text"]').click();
    cy.get('[type="text"]').type('ggg');
    cy.get('[type="password"]').click();
    cy.get('[type="password"]').type('ggg');
    cy.get('.action-button').click();
    cy.get('.success-modal').contains("¡Inicio de sesión exitoso!");

    cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
  })

  it('Falta un campo', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('[type="text"]').click();
    cy.get('[type="text"]').type('ggg');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("¡Error! Por favor, complete todos los campos.");
    cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('[type="password"]').click();
    cy.get('[type="password"]').type('ggg');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("¡Error! Por favor, complete todos los campos.");
    cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');
  })

  it('No coinciden los datos', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('[type="text"]').click();
    cy.get('[type="text"]').type('g');
    cy.get('[type="password"]').click();
    cy.get('[type="password"]').type('ggg');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("La contraseña o el email/nombre de usuario introducidos no son válidos.");
  })

})