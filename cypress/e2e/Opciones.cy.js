describe('Página de Inicio', () => {
  
    it('Contenido barra sin inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.get('.fpa').contains("FPA");
        cy.get('.with').contains("with");
        cy.get('.openai-power').contains("OPENAI POWER");
        cy.get('.clickable-div > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/OpenAI-logo.png');

        cy.get('.button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Acceso.png');
        cy.get('.toolbar-button').contains("Acceder");
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
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

        cy.get('[type="text"]').click();
        cy.get('[type="text"]').type('ggg');

        cy.get('[type="password"]').click();
        cy.get('[type="password"]').type('ggg');

        cy.get('.action-button').click();

        cy.get('.fpa').contains("FPA");
        cy.get('.with').contains("with");
        cy.get('.openai-power').contains("OPENAI POWER");
        cy.get('.clickable-div > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/OpenAI-logo.png');

        cy.get(':nth-child(3) > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Casa.png');
        cy.get('.toolbar > :nth-child(3)').contains("Cálculos");

        cy.get(':nth-child(4) > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Info.png');
        cy.get('.toolbar > :nth-child(4)').contains("¿Quiénes somos?");

        cy.get(':nth-child(5) > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Profile.jpg');
        cy.get('.toolbar > :nth-child(5)').contains("Perfil");

        cy.get('.log-out > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Salir.png');
        cy.get('.log-out').contains("Cerrar sesión");
    })

    it('Navegación barra con inicio de sesión', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');

        cy.get('[type="text"]').click();
        cy.get('[type="text"]').type('ggg');

        cy.get('[type="password"]').click();
        cy.get('[type="password"]').type('ggg');

        cy.get('.action-button').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.get('.toolbar > :nth-child(3)').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');

        cy.get('.toolbar > :nth-child(4)').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/informacion');

        cy.get('.toolbar > :nth-child(5)').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/perfil');

        cy.get('.log-out').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
    })

  
  })