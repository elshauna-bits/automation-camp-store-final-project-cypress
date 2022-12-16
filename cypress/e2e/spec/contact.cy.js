import auth from "../page/auth"
import contact from "../page/contact-page"

describe('Contact Page',()=>{
    beforeEach(()=>{
        auth.login()
        cy.wait(6000) 
 
        cy.get(contact.contactPage).click()
        cy.wait(5000)
    })
    xit('should verify that the email address is correct',()=>{

        cy.get(contact.emailAddress).should('have.text','info@qualityworkscg.com')// should verify that the email address on the contact page is correct
    })
    xit('should send a message',()=>{
        contact.sendMessage("Ky","Levy","kylev@mail.com","Bootcamp","When does it start?")// sends  a message 
        cy.wait(5000)
        cy.get(contact.confirmation).should('be.visible')//checks if the message sent notification is visiblw
    })
    it('should not send a message without email',()=>{
        contact.sendMessageWithoutEmail("Ky","Levy","Bootcamp","When does it start?") // should try to send a message without an email address
        cy.wait(5000)
        cy.get(contact.emailField).should('have.text','Field is required!') //should check if an error message is displayed
        
    })
})