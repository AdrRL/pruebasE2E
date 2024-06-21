describe('Test de Registrar', () => {
  
  it('Registro correcto', () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = `test${randomString}@gmail.com`;

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type(email);
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type(randomString);
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('f');
    cy.get('.action-button').click();

    cy.get('.success-modal').contains("¡Registro exitoso! Revise su correo.");
    cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
  })

  it('Falta un campo', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("¡Error! Por favor, complete todos los campos.");
  })

  it('Email ya enviado', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type('a@gmail.com');
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type('f');
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('f');
    cy.get('.action-button').click();
    
    cy.get('.error-modal').contains("El código ya ha sido enviado al correo. Aceptelo para continuar.");
  })

  it('El correo ya existe', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type('adrirodlop25@gmail.com');
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type('f');
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('f');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("El email introducido ya existe.");
  })

  it('El username ya existe', () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = `test${randomString}@gmail.com`;

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type(email);
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type('ggg');
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('f');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("El username introducido ya existe.");
  })

  it('El correo es invalido', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type('ggg');
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type('ggg');
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('f');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("Correo electrónico no válido.");
  })

  it('Contraseñas diferentes', () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = `test${randomString}@gmail.com`;

    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

    cy.get('.tabs > :nth-child(2)').click();
    cy.get('[type="email"]').click();
    cy.get('[type="email"]').type(email);
    cy.get('[placeholder="Nombre de Usuario"]').click();
    cy.get('[placeholder="Nombre de Usuario"]').type('ggg');
    cy.get('[placeholder="Nombre"]').click();
    cy.get('[placeholder="Nombre"]').type('f');
    cy.get('[placeholder="Apellidos"]').click();
    cy.get('[placeholder="Apellidos"]').type('f');
    cy.get('[placeholder="Contraseña"]').click();
    cy.get('[placeholder="Contraseña"]').type('f');
    cy.get('.ng-pristine').click();
    cy.get('.ng-pristine').type('ff');
    cy.get('.action-button').click();

    cy.get('.error-modal').contains("¡Error! Por favor, las contraseñas deben coincidir.");
  })

})