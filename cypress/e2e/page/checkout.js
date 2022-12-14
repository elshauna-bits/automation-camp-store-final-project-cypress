class Checkout{
get checkoutBtn(){
    return('.snipcart-base-button__wrapper')
}
get fullName(){
    return('input[name="name"]')
}
get email(){
   return('input[name="email"]') 
}
get streetAddress(){
    return('input[name="address1"]')
}
get aptOrSuite(){
    return('input[name="address2"]')
}
get city(){
    return(`input[name="city"]`)
}
get country(){
    return(`select[name="country"]`)
}
get provinceOrState(){
    return(`input[name="province"]`)
}
get postalCode(){
    return(`input[name="postalCode"]`)
}
get continuetoPaymentBtn(){
    return cy.get(`button[type="submit"]`);
}
get cardNumber(){
    return(`input[name="card-number"]`)
}
get expiryDate(){
    return('input[name="expiry-date"]')
}
get cvv(){
    return('input[name="cvv"]')
}
get placeOrderBtn(){
    return cy.get('.snipcart-button-primary').click({force: true})
}
get successMessage(){
    return(`div[class='snipcart__box--title'] div h1[class='snipcart__font--subtitle']`)
}
get emailError(){
    return cy.get('.snipcart-field-error') 
}


checkoutProduct(fullName,email,streetAddress,aptOrSuite,city,country,provinceOrState,postalCode){
    cy.wait(2000)
    cy.get(this.checkoutBtn).click()
    cy.get(this.fullName).type(fullName)
    cy.get(this.email).type(email)
    cy.get(this.streetAddress).type(streetAddress)
    cy.get(this.aptOrSuite).type(aptOrSuite)
    cy.get(this.city).type(city)
    cy.get(this.country).select(country)
    cy.wait(4000)
    cy.get(this.provinceOrState).type(provinceOrState,{force:true})
    cy.get(this.postalCode).type(postalCode)
    //continuetoPaymentBtn.click()
}
payment(cardNumber,expiryDate,cvv){
    cy.get(this.cardNumber).type(cardNumber)
    cy.get(this.expiryDate).type(expiryDate)
    cy.get(this.cvv).type(cvv)
    cy.get(this.placeOrderBtn).click()
}
checkoutProductWithoutEmail(fullName,streetAddress,aptOrSuite,city,country,provinceOrState,postalCode){
    cy.wait(2000)
    cy.get(this.checkoutBtn).click()
    cy.get(this.fullName).type(fullName)
    cy.get(this.streetAddress).type(streetAddress)
    cy.get(this.aptOrSuite).type(aptOrSuite)
    cy.get(this.city).type(city)
    cy.get(this.country).select(country)
    cy.wait(4000)
    cy.get(this.provinceOrState).type(provinceOrState,{force:true})
    cy.get(this.postalCode).type(postalCode)
    //continuetoPaymentBtn.click()
}
editCart(){
    cy.get(this.editBtn).click()
}
}export default new Checkout()