/// <reference types ="Cypress"/>
/// <reference types ="cypress-xpath"/>




describe("Test contact us form via Demo Opencart Test Store", ()=> {
    
    it("Should be able to submit a succesful submission via contact us form", ( ) => {
       
        cy.visit('https://automationteststore.com/')

        
              
    cy.xpath('//*[@id="footer"]/footer/section[2]/div/div[1]/div/ul/li[5]/a').click()//more specific targeting of html elements through xpath
    cy.xpath('//*[@id="ContactUsFrm_first_name"]').type("Chuck Norris")
    cy.xpath('//*[@id="ContactUsFrm_email"]').type("chuck.norris@walkertexasranger.de")
    cy.xpath('//*[@id="ContactUsFrm_enquiry"]').type("Wenn Chuck Norris in das Wasser fällt wird er nicht nass, das Wasser wird Chuck Norris")
    cy.xpath('//*[@id="ContactUsFrm"]/div[2]/div[2]/button').click()

    
    })

  
})

