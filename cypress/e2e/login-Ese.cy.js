/// <reference types="cypress" />

describe("Testing Login", () => {
	beforeEach(() => {
		cy.visit("https://www.konga.com/account/login");
	});
	it("Should be able to login with valid email", () => {
		cy.get("#username").type("jane@blondmail.com");
		cy.get("#password").type("Password@1", { log: false });
		cy.get("._0a08a_3czMG").click();
	});

	it("Should be able to login with phone number", () => {
		cy.get("#username").should("exist").and("not.be.disabled");
		cy.wait(1000);
		cy.get("#username").type("08105695760");
		cy.get("#password").type("Password@1", { log: false });
		cy.get("._0a08a_3czMG").click();
	});
});
