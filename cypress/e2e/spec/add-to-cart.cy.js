import auth from "../page/auth"
import products from "../page/products"

describe('Add items to cart',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    }) 
    it('should add one item to cart',()=>{
        products.addOneItemToCart()
        cy.get('#top-cart').should('have.text','$30.00')
        //cy.get(products.cartSummary).should('be.visible')
    }) 
    it('should add multiple items to cart',()=>{
        products.addMultipleItemsToCart()
        //cy.get('#top-cart').should('have.text','$74.00')
        cy.get(products.cartSummary).should('be.visible')
    })
    it('should add an item to cart after searching',()=>{
        products.addtoCartAfterSearch("Trucker")
        cy.get('#top-cart').should('have.text','$24.00')
        cy.get(products.cartSummary).should('be.visible')
    })
    it('should add an item to cart after sorting',()=>{
        cy.get(products.sortSelect).select('aToZ')
        cy.wait(6000)
        products.addtoCartAfterSort()
        cy.get('#top-cart').should('have.text','$1000.00')
        cy.get(products.cartSummary).should('be.visible')
    })
    it('should add an item to cart after category selection',()=>{
        cy.get(products.categorySelect).select('hat')
        products.addtoCartAfterCategorySelect()
        cy.get('#top-cart').should('have.text','$30.00')
        cy.get(products.cartSummary).should('be.visible')
    })


})