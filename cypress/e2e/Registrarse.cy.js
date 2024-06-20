describe('Test de Registrar', () => {
  
  it('Registro correctamente', () => {
    cy.visit('http://localhost:4200');
    cy.get('a:nth-child(2)').click();
    cy.get('#nombre').click();
    cy.get('#nombre').type('Adrian');
    cy.get('#apellidos').click();
    cy.get('#apellidos').type('Rodriguez Lopez');
    cy.get('#email').click();
    cy.get('#email').type('pruebaRegistro1@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('12345');
    cy.get('button').click();
    cy.get('.ng-submitted').submit();
    cy.get('.success-modal').contains("¡Registro exitoso! Revise su correo");
  })

  it('Falta un campo', () => {
    cy.visit('http://localhost:4200');
    cy.get('a:nth-child(2)').click();
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('button').click();
    cy.get('.ng-submitted').submit();
    cy.get('.error-modal').contains("¡Error! Por favor, complete todos los campos.");
    cy.get('.ng-submitted').submit();
  })

  it('Email ya enviado', () => {
    cy.visit('http://localhost:4200');
    cy.get('a:nth-child(2)').click();
    cy.get('#nombre').click();
    cy.get('#nombre').type('Adrian');
    cy.get('#apellidos').click();
    cy.get('#apellidos').type('Rodriguez Lopez');
    cy.get('#email').click();
    cy.get('#email').type('pruebaRegistro1@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('12345');
    cy.get('button').click();
    cy.get('.ng-submitted').submit();
    cy.get('.error-modal').contains("El código ya ha sido enviado al correo. Aceptelo para continuar.");
  })

  it('El correo ya existe', () => {
    cy.visit('http://localhost:4200');
    cy.get('a:nth-child(2)').click();
    cy.get('#nombre').click();
    cy.get('#nombre').type('Adrian');
    cy.get('#apellidos').click();
    cy.get('#apellidos').type('Rodriguez Lopez');
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('12345');
    cy.get('button').click();
    cy.get('.ng-submitted').submit();
    cy.get('.error-modal').contains("El email introducido ya existe");
  })

})