describe('Página de Inicio', () => {
  
    it('Informacion general', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.get('h1').contains("Bienvenido al universo de FPA")
        cy.get('.header > p').contains("Automatiza la técnica FPA de IFPUG con múltiples ventajas usando ChatGPT");

        cy.get('.cta-button').should('have.text', 'Comienza Ahora');
    })

    it('Casillas', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.get('.feature.slide-in-left').should("be.visible");
        cy.get('.feature.fade-in').should("be.visible");
        cy.get('.feature.slide-in-right').should("be.visible");
    })

    it('Contenido casillas', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
        
        cy.get('.feature.slide-in-left > h3').contains("Análisis Rápido");
        cy.get('.feature.slide-in-left > p').contains("Realiza un análisis FPA de forma rápida y sencilla.");
        cy.get('.feature.fade-in > h3').contains("Integración con ChatGPT");
        cy.get('.feature.fade-in > p').contains("Utiliza el poder de ChatGPT para tus cálculos.");
        cy.get('.feature.slide-in-right > h3').contains("Resultados Precisos");
        cy.get('.feature.slide-in-right > p').contains("Obtén resultados precisos y detallados con solo 1 botón.");

        cy.get('.success-modal').should('not.exist');
        cy.get('.error-modal').should('not.exist');
    })

    it('Imágenes', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');

        cy.get('.feature.slide-in-left > .slide-in-left').should('be.visible').and('have.attr', 'src').should('include', 'assets/feature1.jpg');
        cy.get('.feature.fade-in > .fade-in').should('be.visible').and('have.attr', 'src').should('include', 'assets/OpenAI-logo.png');
        cy.get('.feature.slide-in-right > .slide-in-right').should('be.visible').and('have.attr', 'src').should('include', 'assets/feature3.jpg');
    })

    it('Navegación', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
        cy.get('.clickable-div').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
    })
    
  
  })