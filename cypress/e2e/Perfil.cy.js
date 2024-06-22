describe('Test de Perfil', () => {

  beforeEach(() => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');
    cy.get('[type="text"]').click();
    cy.get('[type="text"]').type('ggg');
    cy.get('[type="password"]').click();
    cy.get('[type="password"]').type('ggg');
    cy.get('.action-button').click();
    cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
  });
  
  it('Perfil se muestra correctamente', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

    cy.get('h1').contains("Perfil");
    cy.get('p').contains("Visualiza y actualiza tu información personal");

    cy.get(':nth-child(1) > label').contains("Correo");
    cy.get(':nth-child(2) > label').contains("Nombre de Usuario");
    cy.get(':nth-child(3) > label').contains("Nombre");
    cy.get(':nth-child(4) > label').contains("Apellidos");

    cy.get('.edit-button').contains("Editar");

    cy.get('.profile-image img').should('be.visible').and('have.attr', 'src').should('include', 'assets/Default-profile.png');
    cy.get('.profile-image .action-button').contains("Subir Imagen");

    cy.get('form .action-button').contains("Actualizar").should('be.disabled');

    cy.get('.edit-button').click();
    cy.get('#email').should('have.value', 'adrian.rodriguez18@alu.uclm.es').and('be.disabled');
    cy.get('#username').should('have.value', 'ggg').and('be.disabled');
    cy.get('#firstName').should('have.value', 'ggg').and('be.enabled');
    cy.get('#lastName').should('have.value', 'ggg').and('be.enabled');

    cy.get('.edit-button').should('have.text', 'Editar');
    cy.get('.profile-image .action-button').should('have.text', 'Subir Imagen');
    cy.get('form .action-button').should('have.text', 'Actualizar');

    cy.get('.success-modal').should('not.exist');
    cy.get('.error-modal').should('not.exist');
  })

  it('Actualizacion perfil', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

    cy.get('.edit-button').click();
    cy.get('#firstName').click();
    cy.get('#firstName').type('{backspace}');
    cy.get('form .action-button').click();
    cy.get('.success-modal').contains("Perfil actualizado con éxito.");

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

    cy.get('#firstName').should('have.value', 'gg');

    cy.get('.edit-button').click();
    cy.get('#firstName').click();
    cy.get('#firstName').type('g');
    cy.get('form .action-button').click();
    cy.get('.success-modal').contains("Perfil actualizado con éxito.");

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

    cy.get('#firstName').should('have.value', 'ggg');
  })

  it('Sin un campo', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

    cy.get('.edit-button').click();
    cy.get('#firstName').click();
    cy.get('#firstName').type('{backspace}');
    cy.get('#firstName').type('{backspace}');
    cy.get('#firstName').type('{backspace}'); 

    cy.get('form .action-button').click();
    cy.get('.error-modal').contains("Algún campo no se encuentra cumplimentado.");
  })
  
  })