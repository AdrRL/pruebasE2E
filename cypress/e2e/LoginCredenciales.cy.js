describe('Test de Login', () => {
  
  it('Contenido', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.active').should('have.text', 'Iniciar Sesión');
    cy.get('.action-button').should('have.text', 'Acceder');
    cy.get('h2').contains("Iniciar Sesión");

    cy.get('.tabs > :nth-child(2)').click();

    cy.get('.active').should('have.text', 'Registrarse');
    cy.get('.action-button').should('have.text', 'Registrarse');
    cy.get('h2').contains("Registrarse");
  })
  
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