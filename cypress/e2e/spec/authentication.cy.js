import auth from "../page/auth"
describe('Authenthication',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('should create an account for the application',()=>{
       auth.signInOrRegister()
       auth.signUp('pain@mail.com','P@$$w0rd!')
    })
    it('should login into the application',()=>{
        auth.signInOrRegister()
        auth.login("pain@mail.com","P@$$w0rd!")
        //cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    })
    it('should not login with incorrect password',()=>{
        auth.signInOrRegister()
        auth.login("ellen@mail.com","P@$$w0rd")
        cy.get(auth.errorMessage).should('have.text','Wrong email or password.')
    })
    it('should not login with incorrect email',()=>{
        auth.signInOrRegister()
        auth.login("ell77en@mail.com","P@$$w0rd!")
        cy.get(auth.errorMessage).should('have.text','Wrong email or password.')
    })
    it('should not login with invalid email',()=>{
        auth.signInOrRegister()
        auth.login("e7en@mail","P@$$w0rd!")
        cy.get(auth.invalidCredError).should('have.text','Email is invalid')
    })
    it('should not create an account for the application without password',()=>{
        auth.signInOrRegister()
        auth.signUpWithoutPassword('ellen@mail.com')
        cy.get(auth.invalidCredError).should('have.text',"Password can't be blank")
    })
    it('should not login without password',()=>{
        auth.signInOrRegister()
        auth.loginWithoutPassword("pain@mail.com")
        cy.get(auth.invalidCredError).should('have.text',"Password can't be blank")
    })
})