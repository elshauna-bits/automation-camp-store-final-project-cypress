import auth from '../page/auth'
import fav from '../page/favourites'
import prodDetails from '../page/prod-details'

describe('Add products to favourites list',()=>{
    beforeEach(()=>{
        auth.login()
        cy.wait(6000)
         
     }) 
     it('should add one item to favourites from products listing page',()=>{
        cy.get(fav.addFittedHatToFav).should('be.visible').click({force:true}) //adds the Quality Fitted Hat to Favorites
        cy.wait(3000)
        cy.get(fav.favouritesBtn).should('have.text','Favorites [1]') // asserts that one products have been added to favourites
     })
     it('should add multiple items to favourites from products listing page',()=>{
         cy.get(fav.addFittedHatToFav).should('be.visible').click({force:true}) //adds the Quality Fitted Hat to Favorites
         cy.get(fav.addMousepadToFav).should('be.visible').click({force:true}) // adds the Mousepad to Favorites
         cy.wait(3000)
         cy.get(fav.favouritesBtn).should('have.text','Favorites [2]') // asserts that two products have been added to favourites
      })
      it('should add to favourites from product details page',()=>{
         prodDetails.viewQualityMugPage() //navigates to the Quality Mug Product details page
         cy.wait(3000)
         cy.get(fav.addQualityMugToFav).should('be.visible').click({force:true}) // adds the Quality Mug to the favorites
         cy.get(fav.favouritesBtn).should('have.text','Favorites [1]') // asserts that one products have been added to favourites
      })

      it('should remove one item from favourites from products listing page',()=>{
         cy.get(fav.addFittedHatToFav).should('be.visible').click({force:true}) // adds the Quality Fitted hat to favorites  from Products listing page
         cy.get(fav.removeFittedHatFromFav).should('be.visible').click({force:true}) //removes the Quality Fitted hat from favorites on the Products listing page
         cy.wait(3000)
         cy.get(fav.favouritesBtn).should('have.text','Favorites [0]')//asserts that there are no products in favs
      })
      it('should remove one item from favourites from favorites page',()=>{
         cy.get(fav.addFittedHatToFav).should('be.visible').click({force:true})
         cy.get(fav.favouritesBtn).click()
         cy.url().should('eq','https://ui-automation-camp.vercel.app/favorites') // asserts that the site is on the favorites page
         cy.get(fav.removeBtn).click() //removes the Quality Fitted hat from favorites on the favorites page
         cy.wait(3000)
         cy.get(fav.favouritesBtn).should('have.text','Favorites [0]')//asserts that there are no products in favs
      })
      it('should be unable to add to favorites from favourites page',()=>{
         cy.get(fav.favouritesBtn).click()
         cy.url().should('eq','https://ui-automation-camp.vercel.app/favorites') // asserts that the site is on the favorites page
         cy.get(fav.favPageText).should('have.text','You can add favorites from the home page.') //asserts that the text with how to add to favorites is on the page
         
      })



})