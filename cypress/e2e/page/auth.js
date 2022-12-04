class Authenthication{
    get signInOrRegisterBtn(){
        return('#signInOrRegister')
    }
    get logInTopBtn(){
        return ('li:first-child')
    }
    get signUpTopBtn(){
        return (`li>a[href*="#"]`)
    }
    get signInGoogle(){
        return(`//div[@class='auth0-lock-social-button-text']`)
    }
    get email(){
        return("[type=email]")
    }
    get password(){
        return(`[type=password]`)
    }
    get submitBtn(){
        return('button.auth0-lock-submit')
    }
    get errorMessage(){
        return(`span[class='animated fadeInUp'] span`)
    }
    get invalidCredError(){
        return('.auth0-lock-error-invalid-hint')
    }
    signInOrRegister(){
        cy.get(this.signInOrRegisterBtn).click()
    }

    login(email,password){
        cy.get(this.email).type(email)
        cy.get(this.password).type(password)
        cy.get(this.submitBtn).click()
    }
    loginWithoutPassword(email){
        cy.get(this.email).type(email)
        cy.get(this.submitBtn).click()
    }

    signUp(email,password){
        cy.get(this.signUpTopBtn).click()
        cy.get(this.email).type(email)
        cy.get(this.password).type(password)
        cy.get(this.submitBtn).click()
    }
    signUpWithoutPassword(email){
        cy.get(this.signUpTopBtn).click()
        cy.get(this.email).type(email)
        cy.get(this.submitBtn).click()
    }
    

}
export default new Authenthication()