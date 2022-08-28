/// <reference types = "cypress" />

describe('Testes no Promobit', () => {
    before(() =>{
        cy.visit("https://www.promobit.com.br");
    });


    it('Getting cupons', () =>{
        cy.get('.css-1ef8ic5 > .css-935vxh').click();
        cy.get('[href="/cupons/"] > .css-em33yf').click();
        cy.get(':nth-child(1) > .css-1prhsfm > .eca2wvy0 > .css-em33yf').contains("cupons ativos");

    })
})