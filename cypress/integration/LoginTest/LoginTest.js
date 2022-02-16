/// <reference types="Cypress" />

describe('Escenarios del  login', () => {
    it('Login satisfactorio', () => {
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.xpath("//input[@type='email']").type("cmontiel_coincaex@outlook.com");
        cy.xpath("//input[@type='password']").type("Pipiriberta1!@");
        cy.get('.login-btn').click();
        cy.get('.grid').should('be.visible')
        
    });
    it('Login no satisfactorio', () => {
        cy.clearCookies()
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.xpath("//input[@type='email']").type("cmontiel_coincaex@outlook.com");
        cy.xpath("//input[@type='password']").type("Pipiriberta1!@");
        cy.get('.font-size').should('have.text','FACILITAMOS TU EVOLUCIÓN FINANCIERA')
    });
    it('Validaciones si funciona correctamente el login', () => {
        cy.clearCookies()
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.get('.flex-row > :nth-child(1)').type("cmontiel_coincaex@outlook.com");
        cy.get('.login-wrong-btn').should('be.visible')
    });
});

