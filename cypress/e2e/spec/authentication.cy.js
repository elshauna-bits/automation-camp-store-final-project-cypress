import auth from "../page/auth"
describe('Authenthication',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()// selects the Sign/Register button on the landing page
    })
    it('should create an account for the application',()=>{
       auth.signUp('pain@mail.com','P@$$w0rd!')// registering a new account
    })
    it('should login into the application',()=>{
        auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')// asserts that the user is taken to the products page after login
    })
    it('should not login with incorrect password',()=>{
        auth.login("ellen@mail.com","P@$$w0rd") // attempts to login with an incorrect password
        cy.get(auth.errorMessage).should('have.text','Wrong email or password.') // asserts that the user is prompted with an error message
    })
    it('should not login with incorrect email',()=>{
        auth.login("ell77en@mail.com","P@$$w0rd!") // attempts to login with an incorrect email 
        cy.get(auth.errorMessage).should('have.text','Wrong email or password.') // asserts that the user is prompted with an error message
    })
    it('should not login with invalid email',()=>{
        auth.login("e7en@mail","P@$$w0rd!") //attempts to login with an invalid email
        cy.get(auth.invalidCredError).should('have.text','Email is invalid') // asserts that the user is prompted with an error message
    })
    it('should not create an account for the application without password',()=>{
        auth.signUpWithoutPassword('ellen@mail.com') // attempts to create an account without a password
        cy.get(auth.invalidCredError).should('have.text',"Password can't be blank") // asserts that the user is prompted with an error message
    })
    it('should not login without password',()=>{
        auth.loginWithoutPassword("pain@mail.com") // attempts to login without password
        cy.get(auth.invalidCredError).should('have.text',"Password can't be blank") // asserts that the user is prompted with an error message
    })
})