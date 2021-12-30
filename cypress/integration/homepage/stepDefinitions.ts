import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(/I am on the homepage/, () => {
    cy.visit('/');
})

Then(/I should see the the react logo/, () => {
    cy.get('img[class="App-logo"]').should('be.visible');
})