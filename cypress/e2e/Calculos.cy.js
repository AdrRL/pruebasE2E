describe('Test de la página de cálculos', () => {

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
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('label[for="apiKey"]').contains('API KEY de OpenAI:');
    cy.get('.instruction-text').contains('Escriba el enunciado del que desea saber información:');
    cy.get('.icon').should('be.visible').and('have.attr', 'src').should('include', 'assets/Ask.png');

    cy.get('.button-container > :nth-child(1)').contains('Calcular Funciones');
    cy.get('.button-container > :nth-child(2)').contains('Calcular Complejidad');
    cy.get('.button-container > :nth-child(3)').contains('Guardadas');
  });

  it('No Api-Key', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('#apiKey').click();
    cy.get('#apiKey').type("Ejemplo");
    cy.get('.user-input').click();
    cy.get('.user-input').type("Hola");

    cy.get('.button-container > :nth-child(1)').click();
    cy.get('.error-modal').contains("La API de OpenAI proporcionada no es válida.");
  });

  it('No FUR', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('#apiKey').click();
    cy.get('#apiKey').type(Cypress.env('APIKEY'));

    cy.get('.button-container > :nth-child(1)').click();
    cy.get('.error-modal').contains("El contenido no puede ser vacío.");
  });

  it('Modal información', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('.icon').click();

    cy.get('.modal-content').should('exist');
    cy.get('h2').contains("Ayuda")
    cy.get(':nth-child(3) > strong').contains("Cuadro de APIKey");
    cy.get('.modal-content > :nth-child(3)').contains("Aquí se debe escribir la API de ChatGPT del usuario.");
    cy.get(':nth-child(4) > strong').contains("Cuadro de texto")
    cy.get('.modal-content > :nth-child(4)').contains("Cuadro de texto: Aquí puede escribir el enunciado del que desea obtener información.")
    cy.get(':nth-child(5) > strong').contains("Botón \"Calcular Funciones\"")
    cy.get('.modal-content > :nth-child(5)').contains("Botón \"Calcular Funciones\": Detecta las funciones de datos y transaccionales encontradas en el enunciado.")
    cy.get(':nth-child(6) > strong').contains("Botón \"Calcular Complejidad\"")
    cy.get('.modal-content > :nth-child(6)').contains("Botón \"Calcular Complejidad\": Calcula la complejidad de las funciones encontradas en el enunciado.")
    cy.get(':nth-child(7) > strong').contains("Botón \"Guardadas\"")
    cy.get('.modal-content > :nth-child(7)').contains("Recuperación de anteriores cálculos.");

    cy.get('.close').click()
  });

  it('Botón funciones', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('#apiKey').click();
    cy.get('#apiKey').type(Cypress.env('APIKEY'));
    cy.get('.user-input').click();
    cy.get('.user-input').type("En la página principal de la esiiab, facultad universitaria de informática, tenemos un apartado de profesores, almacenados en un archivo lógico interno denominado profesores, donde al pulsar se muestran lo que contienen: el departamento al que pertenecen (un profesor solo puede pertenecer a un único departamento), el curso actual, sus horarios de tutorías en el 1 cuatrimestre (relación 1:N), sus horarios de tutorías en el 2 cuatrimestre, su nombre completo (dato derivado calculado con su nombre y apellidos), y su despacho.");

    cy.get('.button-container > :nth-child(1)').click();
    cy.wait(8000);

    cy.get('.download-buttons > :nth-child(1) > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/Save.jpg');
    cy.get('.download-buttons > :nth-child(1)').contains("Guardar");

    cy.get(':nth-child(2) > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/Download.jpg');
    cy.get('.download-buttons > :nth-child(2)').contains("Descargar");

    cy.get('.content > :nth-child(3) > :nth-child(1)').contains("Resumen de Funciones");
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'Entidad');
    cy.get('thead > tr > :nth-child(2)').should('have.text', 'Tipo');
    cy.get('thead > tr > :nth-child(3)').should('have.text', 'Funciones Transaccionales');

    cy.get(':nth-child(3) > :nth-child(3)').contains("JSON");
    cy.get('pre').should('exist');
  });

  it('Botón complejidad', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('#apiKey').click();
    cy.get('#apiKey').type(Cypress.env('APIKEY'));
    cy.get('.user-input').click();
    cy.get('.user-input').type("En la página principal de la esiiab, facultad universitaria de informática, tenemos un apartado de profesores, almacenados en un archivo lógico interno denominado profesores, donde al pulsar se muestran lo que contienen: el departamento al que pertenecen (un profesor solo puede pertenecer a un único departamento), el curso actual, sus horarios de tutorías en el 1 cuatrimestre (relación 1:N), sus horarios de tutorías en el 2 cuatrimestre, su nombre completo (dato derivado calculado con su nombre y apellidos), y su despacho.");

    cy.get('.button-container > :nth-child(2)').click();
    cy.wait(8000);

    cy.get('.download-buttons > :nth-child(1) > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/Save.jpg');
    cy.get('.download-buttons > :nth-child(1)').contains("Guardar");

    cy.get(':nth-child(2) > img').should('be.visible').and('have.attr', 'src').should('include', 'assets/Download.jpg');
    cy.get('.download-buttons > :nth-child(2)').contains("Descargar");

    cy.get('.content > :nth-child(3) > :nth-child(1)').contains("Resumen de Complejidades");

    cy.get('.content > :nth-child(3) > :nth-child(2)').contains("Resumen de Complejidad en las Funciones de Datos");
    cy.get(':nth-child(1) > thead > tr > :nth-child(1)').should('have.text', 'Entidad');
    cy.get(':nth-child(1) > thead > tr > :nth-child(2)').should('have.text', 'Tipo');
    cy.get(':nth-child(1) > thead > tr > :nth-child(3)').should('have.text', 'Complejidad DET');
    cy.get(':nth-child(1) > thead > tr > :nth-child(4)').should('have.text', 'Complejidad RET');
    cy.get(':nth-child(1) > thead > tr > :nth-child(5)').should('have.text', 'Puntos Función');

    cy.get('.content > :nth-child(3) > :nth-child(3) > :nth-child(2)').contains("Resumen de Complejidad en las Funciones Transaccionales");
    cy.get(':nth-child(3) > thead > tr > :nth-child(1)').should('have.text', 'Entidad');
    cy.get(':nth-child(3) > thead > tr > :nth-child(2)').should('have.text', 'Función');
    cy.get(':nth-child(3) > thead > tr > :nth-child(3)').should('have.text', 'Tipo');
    cy.get(':nth-child(3) > thead > tr > :nth-child(4)').should('have.text', 'Complejidad DET');
    cy.get(':nth-child(3) > thead > tr > :nth-child(5)').should('have.text', 'Complejidad FTR');
    cy.get(':nth-child(3) > thead > tr > :nth-child(6)').should('have.text', 'Puntos Función');

    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(5)').contains("Resumen General");

    cy.get('#chart').should('exist');
    cy.get('.total-fp').should('exist');

    cy.get('[for="languageSelect"]').contains("Seleccione un lenguaje:");
    cy.get('[for="productivitySelect"]').contains("Seleccione la productividad:");

    cy.get('.content > :nth-child(3) > :nth-child(4)').contains("JSON");
    cy.get('pre').should('exist');
  });

  it('Historial de guardadas', () => {
    cy.visit('https://angular-tfg.onrender.com/#/FPAwithOpenAI/principal');  

    cy.get('.button-container > :nth-child(3)').click();
    cy.get('h2').contains("Historial de Registros")
    cy.get('.modal-content-record').should('exist');
  });

});