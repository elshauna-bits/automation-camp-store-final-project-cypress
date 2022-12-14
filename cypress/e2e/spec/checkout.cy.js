require('cypress-iframe');
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
        cy.wait(2000)
        checkout.continuetoPaymentBtn.click({force: true})
        cy.wait(4000)
        checkout.payment()
        cy.get(checkout.successMessage).should('have.text','Thank you for your order')
    })   
    xit('should checkout multiple products',()=>{
        products.addMultipleItemsToCart()
        cy.wait(3000)
        checkout.checkoutProduct("Mia Miller","mm@mail.com","34 Daisy Street","1","Raleigh","Jamaica","Kingston","27607")
        cy.wait(2000)
        checkout.continuetoPaymentBtn.click({force: true})
        cy.wait(4000)
        checkout.payment()
        cy.get(checkout.successMessage).should('have.text','Thank you for your order')
    })
    it('should not checkout without email address',()=>{
        products.addOneItemToCart()
        checkout.checkoutProductWithoutEmail("Lois King","33 Free Lane",'4',"Portmore","Jamaica","St. Catherine","34552")
        checkout.continuetoPaymentBtn.click({force: true})
        cy.wait(6000)
        cy.get(checkout.emailError).should('have.text','This field is required')
        //cy.get(checkout.billingTitle).should('have.text','Billing')
    })  

})