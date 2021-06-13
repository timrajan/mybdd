//import {And,Given,When,Then} from 'cypress-cucumber-preprocessor/steps'

//const { Given,When,Then,And } = require("@cypress/browserify-preprocessor");


given("that the website is loaded and user registration is possible",()=>{
        cy.log('I am in Given1')
})

when('a user registers by filling out only the mandatory fields',()=>{
        cy.log('I am in Given2')
})

then('the newly registered user is able to log back in',()=>{
        cy.log('I am in Given5')
})