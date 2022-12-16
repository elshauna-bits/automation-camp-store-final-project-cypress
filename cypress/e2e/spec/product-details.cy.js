import auth from "../page/auth"
import prodDetails from "../page/prod-details"


describe('Product details',()=>{
    beforeEach(()=>{
        auth.login()
        prodDetails.viewQualityMugPage()
        cy.wait(6000)
    })
    it('should verify the Quality Mug price',()=>{
        
        //cy.get(prodDetails.mugTitle).should('have.text','Quality Mug')
        cy.get(prodDetails.mugPrice).should('have.text','Price : $15')
    })
    it('should verify that the product has the correct category',()=>{
        cy.get(prodDetails.category).should('have.text','cup')
    })
    it('should return to the products page',()=>{
        prodDetails.goBacktoProducts()
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')

    })

})