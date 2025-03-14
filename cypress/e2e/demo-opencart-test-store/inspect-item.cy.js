/// <reference types ="Cypress"/>
/// <reference types ="cypress-xpath"/>




describe("Inspect Automation Test Store Items Using Chain OF Commands", ()=> {
    
    it("Click on the first item using item header", ( ) => {
       
        cy.visit('https://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it("Click on the first item using item text", ( ) => {
       
        cy.visit('https://automationteststore.com/')
        cy.get(' .prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

  

  
})

