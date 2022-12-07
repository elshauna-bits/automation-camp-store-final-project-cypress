class Products{
get addQualityFittedHat(){
    
    return('button[data-item-name*="Fitted"]')
}

get addQualityTruckerHat(){
    return(`button[data-item-name*="Trucker"]`)
}
get addQualityMousepad(){
    return(`button[data-item-name*="Mousepad"]`)
}
get addDellLaptop(){
    return('button[data-item-name*="Dell"]')
}
get cartSummary(){
    return('section[class=snipcart-cart__content]')
}
get searchOpt(){
    return('#search')
}
get sortSelect(){
    return('#sort')
}
get categorySelect(){
    return('#category')
}
addOneItemToCart(){
    cy.get(this.addQualityFittedHat).click()

}
addItemToCartTwice(){
    cy.get(this.addQualityTruckerHat).click()
    cy.get(this.addQualityTruckerHat).click()
}
addMultipleItemsToCart(){
    cy.get(this.addQualityFittedHat).click()
    cy.get(this.addQualityTruckerHat).click()
    cy.get(this.addQualityMousepad).click()
  
}
addtoCartAfterSearch(item){
    cy.get(this.searchOpt).type(item)
    cy.get(this.addQualityTruckerHat).click()
}
addtoCartAfterSort(){
    cy.get(this.addDellLaptop).click()
}
addtoCartAfterCategorySelect(){
    cy.get(this.addQualityFittedHat).click()
}

} export default new Products()