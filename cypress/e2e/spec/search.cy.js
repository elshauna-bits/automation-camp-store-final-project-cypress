import auth from "../page/auth"
import products from "../page/products"
import sort from "../page/sort"

describe('Search for products',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.signInOrRegister()
        //auth.login("pain@mail.com","P@$$w0rd!")
        cy.url().should('eq','https://ui-automation-camp.vercel.app/products')
    })
    it('should search for an item which returns one result',()=>{
        cy.get(products.searchOpt).type('mug')
        cy.get(sort.productNames).should('have.text','Quality Mug')

    })
    it('should search for an item which returns multiple results',()=>{
        cy.get(products.searchOpt).type('shoes')
        const shoes = ['Quality Blue Shoes','Quality Stylish Shoes','Quality Heal Shoes']
        
        cy.get(sort.productNames).each(($elem,index) =>{
            expect($elem.text()).equal(shoes[index])
        })

    })
    it('should return products when partial word is searched',()=>{
        cy.get(products.searchOpt).type('ed')
        const results = ['Quality Fitted Hat','Quality Hooded Sweatshirt','Red Couch']
        
        cy.get(sort.productNames).each(($elem,index) =>{
            expect($elem.text()).equal(results[index])
        })

    })


})