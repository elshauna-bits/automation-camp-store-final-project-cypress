import auth from "../page/auth"
import products from "../page/products"

describe('Add items to cart',()=>{
    beforeEach(()=>{
       auth.login()
       cy.wait(6000)
        
    }) 
    it('should add one item to cart',()=>{
        products.addOneItemToCart()// adds a single item to the cart
        cy.wait(6000)
        cy.get('#top-cart').should('have.text','$30.00') // asserts that the cart total is $30 after the item has been added
        cy.wait(6000)
        cy.get(products.cartSummary).should('be.visible') //asserts that the cart Summary popup is visible after item is added to cart
    }) 
    it('should add multiple items to cart',()=>{
        products.addMultipleItemsToCart()// adds multiple items to the cart
        cy.wait(6000)
        cy.get('#top-cart').should('have.text','$54.00')
        cy.wait(6000)
        cy.get(products.cartSummary).should('be.visible') 
    })
    it('should add an item to cart after searching',()=>{
        products.addtoCartAfterSearch("Trucker")//inserts trucker into the search field and adds the item to the cart
        cy.wait(6000)
        cy.get('#top-cart').should('have.text','$24.00')
        cy.wait(6000)
        cy.get(products.cartSummary).should('be.visible')
    })
    it('should add an item to cart after sorting',()=>{
        cy.get(products.sortSelect).select('aToZ')//selects the A to Z option in the sort option
        cy.wait(6000) //waits for the page to load so that an item can be selected
        products.addtoCartAfterSort() //adds an item to the cart after the products are sorted
        cy.wait(6000)
        cy.get('#top-cart').should('have.text','$1000.00')
        cy.get(products.cartSummary).should('be.visible')
    })
    it('should add an item to cart after category selection',()=>{
        cy.get(products.categorySelect).select('hat') // selects the hat option in the category field
        cy.wait(6000)
        products.addtoCartAfterCategorySelect()// adds an item to the cart after the category is selected
        cy.wait(6000)
        cy.get('#top-cart').should('have.text','$30.00')
        cy.get(products.cartSummary).should('be.visible')
    })


})