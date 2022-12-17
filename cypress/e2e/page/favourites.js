class Favourites{
    get fittedHatFav(){
        return ("//div[@id='product-0']//div[@class='css-1m8iww1']//*[name()='svg']")
    }
    get mousepadFav(){
        return("//div[@id='product-2']//div[@class='css-1m8iww1']//*[name()='svg']")
    }
    get favouritesBtn(){
        return("#top-favorite")
    }


    addOneItemToFavs(){
    cy.get(this.fittedHatFav).click()    
    }

}export default new Favourites()