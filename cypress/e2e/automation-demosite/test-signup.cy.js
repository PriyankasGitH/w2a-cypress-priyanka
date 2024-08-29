/*
const { faker } = require('@faker-js/faker/locale/af_ZA');



describe('Test Sign up', () => {

    it('register for user', () => {
        cy.visit('/')
        cy.contains('Signup / Login').click()
        cy.contains('New User Signup!').should('be.visible')
        cy.get('data-qa="signup-name"').type(faker.person.fullName())
        cy.get('data-qa="signup-email"').type(faker.internet.email())
        cy.get('data-qa="signup-button"').click()
    });

});
*/
/*
const { faker } = require('@faker-js/faker/locale/af_ZA'); // Import locale if supported
  // Import locale directly if supported

describe('Test Sign up', () => {

    it('register for user', () => {
        cy.visit('/') // Visit the base URL
        cy.contains(' Signup / Login').click() // Click on the Signup/Login link
        cy.contains('New User Signup!').should('be.visible') // Verify that the signup section is visible

        // Fill in the signup form
        cy.get('[data-qa="signup-name"]').type(faker.person.fullName())  // Use locale-specific Faker methods
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())  // Generate and type a fake email address
    })

})
*/

const { faker } = require('@faker-js/faker/locale/af_ZA');

describe('Test Sign up', () => {

    const newUserInfo = {
        username:faker.person.fullName(),
        email:faker.internet.email(),
        password: faker.internet.password()
    }
    
    
   // const name = faker.person.fullName()
   // const email = faker.internet.email()
   // const password = faker.internet.password()

    it('register for user', () => {
        // Launch web page
        cy.visit('/') // Visits the base URL defined in the config
        
        
        /* 
         * Register as new user 
        */
        // Click on Sign up button
        cy.contains('Signup / Login').click() // Click on the Signup/Login link
        
        // Verify visibility of the sign up button
        cy.contains('New User Signup!').should('be.visible') // Verify that the signup section is visible

        // Fill in random name with faker 
        cy.get('[data-qa="signup-name"]').type(newUserInfo.username) // Use locale-specific Faker methods
        
        // Fill in eandom email with faker
        cy.get('[data-qa="signup-email"]').type(newUserInfo.email) // Generate and type a fake email address
       
        // Click Sign up button
        cy.get('[data-qa="signup-button"]').click();



        /* 
         * Fill account info
        */
        cy.contains('Enter Account Information').should('be.visible')
        cy.get('#id_gender2').check();
        cy.get('[data-qa="password"]').type(newUserInfo.password)

        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('10')
        cy.get('[data-qa="years"]').select('2012')
        cy.get('#newsletter').check()

    })

})
