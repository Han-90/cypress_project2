/// <reference types ="Cypress"/>
/// <reference types ="cypress-xpath"/>




describe("Test contact us form via Demo Opencart Test Store", ()=> {
    
    it("Should be able to submit a succesful submission via contact us form", ( ) => {

    cy.visit('https://demo.opencart.com/')
    //cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a').click()   
    cy.xpath("//div[@class='row']//a[contains(@href,'contact')]").click()
    cy.get('#input-name').type("Chuck Norris")
    cy.get('#input-email').type("chuck.norris@walkertexasranger.de")
    cy.get('#input-enquiry').type("Wenn Chuck Norris in das Wasser fällt wird er nicht nass, das Wasser wird Chuck Norris")
    cy.get('.text-end > .btn').click()

    
    })

  
})

