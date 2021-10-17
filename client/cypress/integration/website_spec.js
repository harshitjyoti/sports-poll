describe("Polls", () => {
  before(() => {
    cy.intercept("/polls", {
      fixture: "polls.json",
    }).as("polls");
    cy.visit("localhost:3000/");
  });
  it("Load the Polls Form", () => {
    cy.get("[data-test-name=loader]").should("be.visible");
    cy.wait("@polls");
    cy.get('[data-test-name="polls-left"]').should(
      "be.text",
      "Polls available: 15"
    );
    cy.get('[data-test-name="sport" ]').should("be.visible");
    cy.get('[data-test-name="group-country"]').should("be.visible");
    cy.get('[data-test-name="home-value"').should("be.visible");
    cy.get('[data-test-name="draw"').should("be.visible");
    cy.get('[data-test-name="away-value"').should("be.visible");
  });
  it("Cast Poll Success", () => {
    cy.get('[data-test-name="home-value"').should("be.visible").click();
    cy.intercept("/polls/:id", {
      status: "success",
    }).as("polls");
    cy.get('[data-test-name="polls-left"]').should(
      "be.text",
      "Polls available: 14"
    );
  });
  it("Cast Poll Complete", () => {
    const len = 14;
    var genArr = Array.from(Array(len).keys());
    cy.wrap(genArr).each((index) => {
      cy.get('[data-test-name="home-value"').should("be.visible").click();
      cy.wait(200);
      if (index === 13) return false;
      cy.get('[data-test-name="polls-left"]').should(
        "be.text",
        `Polls available: ${len - (index + 1)}`
      );
    });
    cy.get('[data-test-name="polls-finished"')
      .should("be.visible")
      .should("have.text", "You have finished all the polls");
  });
});
