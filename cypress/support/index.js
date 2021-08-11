// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import LoginPage from './pageobjects/loginPage'
import deepEqualInAnyOrder from 'deep-equal-in-any-order'
require('cypress-xpath')
require('@shelex/cypress-allure-plugin')
require('dateformat')
require('cypress-get-table')

chai.use(deepEqualInAnyOrder)

const login = new LoginPage;

afterEach(() => {
    cy.task('log', `Nome do cenário: ${window.testState.currentScenario.name}`)
    // let step = window.testState.currentStep;
    cy.screenshot('Finalizou o teste');
})

