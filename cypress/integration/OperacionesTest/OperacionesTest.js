/// <reference types="Cypress" />

describe('Pruebas a la seccion de compras del usuario', () => {
    it('Ingresando al dashboard del usuario', () => {
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.xpath("//input[@type='email']").type("cmontiel_coincaex@outlook.com");
        cy.xpath("//input[@type='password']").type("Pipiriberta1!@");
        cy.get('.login-btn').click();
        cy.xpath("//a[text()='Comprar']").click();

        cy.xpath("//a[text()='Operaciones']").click();
    });
    it('Seccion para comprar : BTC', () => {
        cy.get('#logo1').should("be.visible")
    });
    it('Seccion para comprar : ETH', () => {
        cy.get('#logo2').should("be.visible")
    });
    it('Seccion para comprar : USDT', () => {
        cy.get('#logo3').should("be.visible")
    });
    it('Seccion de Transacciones pendientes', () => {
        cy.xpath("//a[contains(@id, 'w-tabs-0-data-w-tab-0')]").click()
        cy.get("#transactionpage").should("be.visible")
    });
    it('Seccion de Todas Transacciones las transacciones', () => {
        cy.xpath("//a[contains(@id, 'w-tabs-0-data-w-tab-1')]").click()
        cy.get("#transaction-historypage").should("be.visible")
    });
    it('Seccion de Todas Transacciones Bancarias', () => {
        cy.xpath("//a[contains(@id, 'w-tabs-0-data-w-tab-2')]").click()
        cy.get("#email-form").should("be.visible")
    });
});