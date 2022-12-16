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
get successMessage(){
    return(`div[class='snipcart__box--title'] div h1[class='snipcart__font--subtitle']`)
}
get emailError(){
    return cy.get('.snipcart-field-error') 
}
get billingTitle(){
    return("div[class='snipcart__box'] h1[class='snipcart__font--subtitle']")
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
    
}
payment(){
    cy.iframe('.snipcart-payment-card-form iframe').find(this.cardNumber).type('4242 4242 4242 4242')
    cy.iframe('.snipcart-payment-card-form iframe').find(this.expiryDate).type('1225')
    cy.iframe('.snipcart-payment-card-form iframe').find(this.cvv).type('123')
    //cy.get(this.placeOrderBtn).click()
    cy.get('.snipcart-button-primary').click({force: true})
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
    
}
editCart(){
    cy.get(this.editBtn).click()
}
}export default new Checkout()