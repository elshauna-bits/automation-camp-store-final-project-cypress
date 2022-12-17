import auth from '../page/auth'
import fav from '../page/favourites'

describe('Add products to favourites list',()=>{
    beforeEach(()=>{
        auth.login()
        cy.wait(6000)
         
     }) 
     it('should add one item to favourites',()=>{
        fav.addOneItemToFavs()
        cy.wait(3000)
        cy.get(fav.favouritesBtn).should('have.text','Favorites [1]')
     })
})