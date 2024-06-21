describe('Página de Inicio', () => {
  
    it('Contenido barra sin inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');



    })

    it('Navegación barra sin inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
        cy.get('.clickable-div').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
        cy.get('.toolbar-button').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
        cy.get('.cta-button').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');
    })

    it('Contenido barra con inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

    })

    it('Navegación barra con inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

    })

  
  })