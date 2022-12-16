import auth from "../page/auth"
import products from "../page/products"
import cart from "../page/cart"

describe('Cart interactions', ()=>{
    beforeEach(()=>{
        auth.login()
    })

    it('should increase item quantity',()=>{
        products.addOneItemToCart()
        cy.wait(6000)
        cy.get(cart.itemAmount).should('have.text','1')
        cart.increaseItemQuantity()
        cy.wait(6000)
        cy.get(cart.itemAmount).should('have.text','2')
    })
    it('should decrease item quantity',()=>{
        products.addItemToCartTwice()
        cy.wait(6000)
        cy.get(cart.itemAmount).should('have.text','2')
        cart.decreaseItemQuantity()
        cy.wait(6000)
        cy.get(cart.itemAmount).should('have.text','1')
    })
    it ('should delete item from cart', ()=>{
        products.addOneItemToCart()
        cy.get(cart.itemAmount).should('have.text','1')
        cart.deleteItemFromCart()
        cy.wait(6000)
        cy.get(cart.cartItem).should('not.exist')
    })


})