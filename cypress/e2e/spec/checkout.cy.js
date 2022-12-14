import auth from "../page/auth"
import checkout from "../page/checkout"
import products from "../page/products"

describe('Checkout products',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        cy.clearCookies()
        cy.wait(8000)
    }) 
    xit('should checkout one product',()=>{
        products.addOneItemToCart()
        cy.wait(3000)
        checkout.checkoutProduct("Mia Miller","mm@mail.com","34 Daisy Street","1","Raleigh","Jamaica","Kingston","27607")
        //checkout.payment("4242424242424242","1228","123")
        cy.wait(2000)
        checkout.continuetoPaymentBtn.click({force: true})
        cy.wait(2000)
        cy.get('.snipcart-button-primary').click({force: true})
        cy.get(checkout.successMessage).should('have.text','Thank you for your order')
    })   
    xit('should checkout multiple products',()=>{
        products.addMultipleItemsToCart()
        //cy.wait(3000)
        checkout.checkoutProduct("Tia Miller","tm@mail.com","25 Daisy Avenue","1","Mona","Jamaica","Kingston","27607")
        //checkout.payment("4242424242424242","1228","123")
        cy.wait(2000)
        checkout.continuetoPaymentBtn.click({force: true})
        cy.wait(2000)
        cy.get('.snipcart-button-primary').click({force: true})
        cy.get(checkout.successMessage).should('have.text','Thank you for your order')
    })
    it('should not checkout without email address',()=>{
        products.addOneItemToCart()
        checkout.checkoutProductWithoutEmail("Lois King","33 Free Lane",'4',"Portmore","Jamaica","St. Catherine","34552")
        checkout.continuetoPaymentBtn.click({force: true})
        cy.get(checkout.emailError).should('have.text','This field is required')
    })  

})