/// <reference types="cypress" />

describe("Todo Form", () => {
  it("verifies the id of a newly created todo is 201", () => {
    cy.visit("http://localhost:3000/todo");

    // Create a new todo
    cy.get("input[type='text']").type("New Todo 200");
    cy.contains("ADD").click();

    // Verify the id of the newly created todo
    cy.get('.todoid')
    .should('have.text', '200')

    // Create a new todo
    cy.get("input[type='text']").type("New Todo 201");
    cy.contains("ADD").click();

    // Verify the id of the newly created todo
    // cy.get(".App div").last().invoke("attr", "todoid").should("eq", "200");
    cy.get('.todoid').last()
    .should('have.text', '201')
    cy.screenshot()
  });
});