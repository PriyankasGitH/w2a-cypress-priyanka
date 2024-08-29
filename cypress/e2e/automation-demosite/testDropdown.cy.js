describe('Handle dropdown', () => {

    it('Select skills', () => {

        cy.visit('https://demo.automationtesting.in/Register.html')

        // Ensure the dropdown is visible
        cy.get('#Skills').should('be.visible')

        // Verify the default placeholder text
        cy.get('#Skills option:first').should('have.text', 'Select Skills')

        // Verify the default value is an empty string
        cy.get('#Skills').should('have.value', '')

        // Select the desired option from the dropdown
        cy.get('#Skills').select('Client Server')

        // Assert that the correct option is selected
        cy.get('#Skills').should('have.value', 'Client Server')
    })
})