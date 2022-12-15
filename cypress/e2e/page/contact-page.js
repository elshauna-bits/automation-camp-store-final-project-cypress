class Contact{
get contactPage(){
    return('#top-contact')
}
get emailAddress(){
return cy.get('[href="mailto:info@qualityworkscg.com"] > .chakra-stack > .chakra-text')
}
get firstName(){
    return('#firstName')
}
get lastName(){
    return('#lastName')
}
get emailField(){
    return('#email')
}
get subject(){
    return('#subject')
}
get message(){
    return('#message')
}
get sendMsgBtn(){
    return("button[class='chakra-button css-vs0e4t']")
}
get confirmation(){
    return cy.get('#toast-1')
}
get emailError(){
    return cy.get('#field-\:r4\:-feedback')
}
sendMessage(firstName,lastName,emailField,subject,message){
    cy.get(this.firstName).type(firstName)
    cy.get(this.lastName).type(lastName)
    cy.get(this.emailField).type(emailField)
    cy.get(this.subject).type(subject)
    cy.get(this.message).type(message)
    cy.get(this.sendMsgBtn).click()
}
sendMessageWithoutEmail(firstName,lastName,subject,message){
    cy.get(this.firstName).type(firstName)
    cy.get(this.lastName).type(lastName)
    cy.get(this.subject).type(subject)
    cy.get(this.message).type(message)
    cy.get(this.sendMsgBtn).click()
}
}export default new Contact()