/// <reference types ="Cypress"/>
/// <reference types ="cypress-xpath"/>




describe("Test contact us form via Demo Opencart Test Store", ()=> {
    
    it("Should be able to submit a succesful submission via contact us form", ( ) => {
       
        cy.visit('https://demo.opencart.com/')

        
              
    cy.xpath("//div[@class='row']//a[contains(@href,'contact')]").click()//more specific targeting of html elements through xpath
    cy.get('#input-name').type("Chuck Norris")
    cy.get('#input-email').type("chuck.norris@walkertexasranger.de")
    cy.get('#input-enquiry').type("Wenn Chuck Norris in das Wasser fällt wird er nicht nass, das Wasser wird Chuck Norris")
    cy.xpath("//button[@type='submit' and @class='btn btn-primary']").click()

    
    })

  
})

