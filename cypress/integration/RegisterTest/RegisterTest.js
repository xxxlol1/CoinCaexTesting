/// <reference types="Cypress" />

describe('Ingreso al formulario del registro', () => {
    it.only('Ingreso al formulario del formulario', () => {
    cy.visit("https://pruebasit-exch.com:8100/login");
    cy.xpath("//span[text()='Regístrate Aquí']").click()
    cy.xpath("//input[@name='ion-input-2'] ").type("orangeheatt@gmail.com")
    cy.xpath("//input[@name='ion-input-3'] ").type("123456789")
    cy.xpath("//input[@name='ion-input-4'] ").type("123456789")
    cy.get('.ion-color').click()
    });
});
