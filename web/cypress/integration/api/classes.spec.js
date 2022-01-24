/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classe endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Aigilizei prof",
                "avatar":"https://pickaface.net/gallery/avatar/20120409_230759_3646_Fake.png",
                "whatsapp":"31 123412345",
                "bio":"Lorem ipsum lorem ipsum",
                "subject":"Química",
                "cost":1000,
                "schedule":[
                  {
                    "week_day":0,
                    "from":"08:00",
                    "to":"09:00"
                  }
                ]
            }
        }).then((response) => {

          expect(response.status).to.eq(201)

          expect(response.duration).lessThan(30)
          
              /*expect(response.body.class_id)
            .an('number')
            .satisfy((totalValue) => { return totalValue >= 1})*/
            
            
        })
        
    });
});