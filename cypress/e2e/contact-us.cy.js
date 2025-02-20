/// <reference types ="Cypress"/>


describe("Test contact us form via WebdriverUni", ()=> {
    
    it("Should be able to submit a succesful submission via contact us form", ( ) => {

        //cypress code

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Robert')
        cy.get('[name="last_name"]').type('Deniro')
        cy.get('[name="email"]').type('robert.deniro@googlemail.com')
        cy.get('textarea.feedback-input').type('Im one of the most popular hollywood stars youve ever seen...just sayin')
        cy.get('[type="submit"]').click()
    })

    it("Should not be able to submit a succesful submission via contact us form as all fields are required", ( ) => {

        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Brad')
        cy.get('[name="last_name"]').type('Pitt')
        cy.get('textarea.feedback-input').type('So guys whats in the f***in box?')
        cy.get('[type="submit"]').click()
        
    })

})

