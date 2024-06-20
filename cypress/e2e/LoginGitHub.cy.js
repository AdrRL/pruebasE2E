describe('Test de Login en GitHub', () => {
  
  it('Login correctamente', () => {
    cy.visit('http://localhost:4200');
    cy.get('[routerlink="/inicio-sesion"]').contains("Iniciar Sesión");
    cy.get('[routerlink="/registro"]').contains("Registrarse");
    cy.get('.auth-links > a:nth-child(1)').click();

    cy.get('app-login-github > .row > .btn > img').click();
    
    // cy.get('[routerlink="/opciones/mapa"]').contains("Mapa");
    // cy.get('[routerlink="/opciones/perfil"]').contains("Perfil");
    // cy.get('.exit-button').contains("Salir");
  })

})