import 'cypress-iframe'
import auth from "../page/auth"
import products from "../page/products"
import homepage from "../page/home-page"


describe('Cart interactions', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    })

    it('verify content on the homepage',()=>{
        cy.get(homepage.pageHeaderTitle).should('have.text','Automation Camp Store')
        cy.get(homepage.signOutBtn).should('have.text','Sign Out')
        cy.get(homepage.productsTitle).should('have.text','Products')
    })
    it('should verify that the iframe has loaded',()=>{
        cy.get(homepage.youTubeVideo).should('be.visible') // verifies that the YouTube video is visible on the page
        cy.frameLoaded(homepage.iFrame,{url: 'https://www.youtube.com/embed/JSda4u5jFFk'}) //verifies that the YouTube video in the iframe has loaded with the specified url
    })
    it('should verify that the page can be reset after category selection',()=>{
        cy.get(products.categorySelect).select('laptop') // selects the laptop option in the category field
        cy.get(homepage.mackBookProTitle).should('have.text','Mackbook Pro')//verifies that a laptop product has been returned
        cy.get(homepage.resetBtn).click() // resets the filtering that was done
        cy.get(homepage.fittedHatTitle).should('have.text','Quality Fitted Hat') // verifies that the reset was succesful
    })

    


})