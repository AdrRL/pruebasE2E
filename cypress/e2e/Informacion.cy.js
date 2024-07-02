describe('Información', () => {

    beforeEach(() => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/acceso');
        cy.get('[type="text"]').click();
        cy.get('[type="text"]').type('ggg');
        cy.get('[type="password"]').click();
        cy.get('[type="password"]').type('ggg');
        cy.get('.action-button').click();
        cy.url().should('include', 'https://angular-tfg.onrender.com/#/FPAwithOpenAI/general');
    });

    it('Contenido', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/informacion');

        cy.get('.intro-text').contains("!Hola a todos! Me llamo Adrián y soy un estudiante universitario de la Esiiab, todo un apasionado por la tecnología. En esta página, estoy dando vida a mi proyecto del Trabajo de Fin de Grado supervisado por mis tutores Pablo Bermejo y José Antonio Gámez. Relativo al método FPA, pretendemos averiguar hasta qué punto puede ser útil y fiable el uso de ChatGPT para acelerar el lento proceso de aplicación de FPA. Poder reducir el tiempo de medición del tamaño del software permitiría un proceso de planificación más rápido, permitiendo al equipo acortar los tiempos del proyecto.");
        cy.get('.name').contains("ADRIÁN RODRÍGUEZ LÓPEZ");
        cy.get('.buttons > :nth-child(1)').contains("Adrián Rodríguez López");
        cy.get('.buttons > :nth-child(2)').contains("Adrirodlop25@gmail.com");

        cy.get('.success-modal').should('not.exist');
        cy.get('.error-modal').should('not.exist');
    });

    it('Imágenes', () => {
        cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/informacion');

        cy.get('.profile-image').should('be.visible').and('have.attr', 'src').should('include', 'assets/Yo.jpg');
        cy.get(':nth-child(1) > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Linkedin.png');
        cy.get(':nth-child(2) > .button-icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Sobre.png');
    });


});
