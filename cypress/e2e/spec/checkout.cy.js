import auth from "../page/auth"
import checkout from "../page/checkout"
import products from "../page/products"

describe('Checkout products',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    }) 
    it('should checkout one product',()=>{
        cy.wait(8000)
        products.addOneItemToCart()
        cy.wait(3000)
        checkout.checkoutProduct("Mia Miller","mm@mail.com","34 Daisy Street","1","Raleigh","United States","North Carolina","27607")
        checkout.payment("4242424242424242","1228","123")
        cy.get(checkout.successMessage).should('have.text','Thank you for your order')

    })    
})