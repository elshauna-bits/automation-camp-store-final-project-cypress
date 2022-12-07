import auth from "../page/auth"
import products from "../page/products"
import cart from "../page/cart"

describe('Cart interactions', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    })

    it('should increase item quantity',()=>{
        products.addOneItemToCart()
        //cy.get(cart.itemAmount).should('have.text','1')
        cart.increaseItemQuantity()
        cy.get(cart.itemAmount).should('have.text','2')
    })
    it('should decrease item quantity',()=>{
        products.addItemToCartTwice()
        //cy.get(cart.itemAmount).should('have.text','2')
        cart.decreaseItemQuantity()
        cy.get(cart.itemAmount).should('have.text','1')
    })
    it ('should delete item from cart', ()=>{
        products.addOneItemToCart()
        //cy.wait(6000)
        //cy.get(cart.itemAmount).should('have.text','1')
        cart.deleteItemFromCart()
        cy.get(cart.cartItem).should('not.exist')
    })


})