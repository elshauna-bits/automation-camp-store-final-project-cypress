import auth from "../page/auth"
import contact from "../page/contact-page"

describe('Contact Page',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
        cy.get(contact.contactPage).click()
        cy.wait(5000)
    })
    xit('should verify that the email address is correct',()=>{

        cy.get(contact.emailAddress).should('have.text','info@qualityworkscg.com')
    })
    xit('should send a message',()=>{
        contact.sendMessage("Ky","Levy","kylev@mail.com","Bootcamp","When does it start?")
        cy.wait(5000)
        cy.get(contact.confirmation).should('be.visible')
    })
    it('should not send a message without email',()=>{
        contact.sendMessageWithoutEmail("Ky","Levy","Bootcamp","When does it start?")
        cy.wait(5000)
        cy.get(contact.emailField).should('have.text','Field is required!')
        
    })
})