describe('Test de Login', () => {
  
  it('Login correctamente', () => {
    cy.visit('http://localhost:4200');
    cy.get('[routerlink="/inicio-sesion"]').contains("Iniciar Sesión");
    cy.get('[routerlink="/registro"]').contains("Registrarse");
    cy.get('.auth-links > a:nth-child(1)').click();
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('12345');
    cy.get('button:nth-child(3)').click();
    cy.get('.success-modal').contains("¡Inicio de sesión exitoso!");
    cy.get('.ng-submitted').submit();
    cy.get('[routerlink="/opciones/mapa"]').contains("Mapa");
    cy.get('[routerlink="/opciones/perfil"]').contains("Perfil");
    cy.get('.exit-button').contains("Salir");
  })

  it('Falta un campo', () => {
    cy.visit('http://localhost:4200');
    cy.get('.auth-links > a:nth-child(1)').click();
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('button:nth-child(3)').click();
    cy.get('.error-modal').contains("¡Error! Introduzca todos los datos correctamente.");
    cy.get('.ng-submitted').submit();
  })

  it('No coincide', () => {
    cy.visit('http://localhost:4200');
    cy.get('.auth-links > a:nth-child(1)').click();
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('1234');
    cy.get('button:nth-child(3)').click();
    cy.get('.error-modal').contains("La contraseña o el email introducido no es válido");
    cy.get('.ng-submitted').submit();
  })

  it('Sale del Login correctamente', () => {
    cy.visit('http://localhost:4200');
    cy.get('.auth-links > a:nth-child(1)').click();
    cy.get('#email').click();
    cy.get('#email').type('Adriancortesmunoz@gmail.com');
    cy.get('#contrasena').click();
    cy.get('#contrasena').type('12345');
    cy.get('button:nth-child(3)').click();
    cy.get('.success-modal').contains("¡Inicio de sesión exitoso!");
    cy.get('.ng-submitted').submit();
    cy.get('.exit-button').click();
    cy.get('[routerlink="/inicio-sesion"]').contains("Iniciar Sesión");
    cy.get('[routerlink="/registro"]').contains("Registrarse");
  })

})