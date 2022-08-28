/// <reference types = "cypress" />

describe('Testes de Input', () => {
    before(() =>{
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    });


    it('String Inputs', () =>{
        cy.get('#formNome').should("have.value","");
        cy.get('#formNome').type("Levi Moraes");
        cy.get('#formNome').should("have.value","Levi Moraes");
    })

    it('Radio Inputs', () =>{
        cy.get('#formSexoMasc').should("exist");
        cy.get('#formSexoMasc').click();
        cy.get('#formSexoMasc').should("be.checked");
        
        cy.get('#formComidaCarne').should("exist");
        cy.get('#formComidaFrango').should("exist");
        cy.get('#formComidaPizza').should("exist");
        cy.get('#formComidaVegetariana').should("exist");
    })    
})