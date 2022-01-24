/// <reference types="cypress" />
   
  context('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/')      
    });
    it('Navegar para o cadastro de aulas', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contains', 'give-classes')        
    });

    it('Navegar para pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contains', 'study')         
    });
  });


  /*
  Formas de abrir um teste em uma determinada largura ao iniciar o teste

  Desktop wide
  - npx cypress open --config viewportWidth=1400
  - npx cypress run --config viewportWidth=1400
 
  Desktop Simple
  - npx cypress open --config viewportWidth=1200
  - npx cypress run --config viewportWidth=1300

  Tablet
  - npx cypress open --config viewportWidth=950
  - npx cypress run --config viewportWidth=950

  Mobile
  - npx cypress open --config viewportWidth=765
  - npx cypress run --config viewportWidth=765

  */