/// <reference types="Cypress" />

describe('Pruebas a la seccion de compras del usuario', () => {
    it('Ingresando al dashboard del usuario', () => {
        cy.visit("https://pruebasit-exch.com:8100/login")
        cy.xpath("//input[@type='email']").type("cmontiel_coincaex@outlook.com");
        cy.xpath("//input[@type='password']").type("Pipiriberta1!@");
        cy.get('.login-btn').click();
        cy.xpath("//a[text()='Vender (Cash out)']").click();
    });
    it('Form para comprar : BTC', () => {
        cy.get('#logo1').click()
        cy.get('#sellForm').should('be.visible')
        cy.wait(12000)
        cy.get("ion-sel-0-lbl").click()
       
       // cy.xpath("//h1[contains(text(),'Comprar BTC')]").should("be.visible")
    });
    it.skip('Form para comprar : ETH', () => {
        cy.get('#logo2').click()
        cy.get('#buyForm').should('be.visible')
         // cy.wait(8000)
       // cy.xpath("//h1[contains(text(),'Comprar BTC')]").should("be.visible")
    });
    it.skip('Form para comprar : USDT', () => {
        cy.get('#logo3').click()
        cy.get('#buyForm').should('be.visible')
         // cy.wait(8000)
       // cy.xpath("//h1[contains(text(),'Comprar BTC')]").should("be.visible")
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