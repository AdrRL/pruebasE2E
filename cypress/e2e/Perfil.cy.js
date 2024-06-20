describe('Test de Perfil', () => {
  
    it('Perfil se muestra correctamente', () => {
      cy.visit('http://localhost:4200');
      cy.get('.auth-links > a:nth-child(1)').click();
      cy.get('#email').click();
      cy.get('#email').type('Tic.ramonycajal.adrian@gmail.com');
      cy.get('#contrasena').click();
      cy.get('#contrasena').type('12345');
      cy.get('button:nth-child(3)').click();
      cy.get('.success-modal').contains("¡Inicio de sesión exitoso!");
      cy.get('.ng-submitted').submit();
      cy.get('[routerlink="/opciones/perfil"]').click();
      cy.get('.avatar').should("be.visible");
      cy.get('h2').contains("Adrian");
      cy.get('.user-info > :nth-child(2)').contains("Rodriguez")
      cy.get('.user-info > :nth-child(3)').contains("Tic.ramonycajal.adrian@gmail.com");
    })
  
  })