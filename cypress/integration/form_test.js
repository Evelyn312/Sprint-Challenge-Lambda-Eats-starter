describe("test form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    });
    it("add text to First Name input", () =>{ 
        cy.get('[data-cy="fName"]').type("Evelyn").should("have.value", "Evelyn");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.contains("Add to Order").click();
    });
})