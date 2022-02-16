/// <reference types="Cypress" />

describe('ruebas al dashboard del usuario', () => {
    it('Ingresando al dashboard del usuario', () => {
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.xpath("//input[@type='email']").type("cmontiel_coincaex@outlook.com");
        cy.xpath("//input[@type='password']").type("Pipiriberta1!@");
        cy.get('.login-btn').click();
    });
    it('Funcion de la grafica de  : BITCOIN', () => {
        cy.get('#logo1').click()
        cy.get('#tradingview').should('be.visible')
    });
    it('Funcion de la grafica de  : ETHEREUM', () => {
        cy.get('#logo2').click()
        cy.get('#tradingview').should('be.visible')
    });
    it('Funcion de la grafica de  : USDT', () => {
        cy.get('#logo3').click()
        cy.get('#tradingview').should('be.visible')
    });
    it('Seccion de notificaciones', () => {
        cy.get("#notifications").should("be.visible")
    });
    it.skip('Si no hay notificaciones', () => {
        cy.get("#notifications").should("have.text", "TODAVÍA NO TIENES NOTIFICACIONES")
    });
    it('Seccion de ordenes', () => {
        cy.get("#Transactions").should("be.visible")
    });
    it.skip('Si hay oredens nuevas', () => {
        cy.xpath("//td[contains(text(),'Compra')]").should("have.text","Compra")

    });
});