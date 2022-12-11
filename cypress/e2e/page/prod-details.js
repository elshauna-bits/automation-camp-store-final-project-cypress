class Details{
get qualityMug(){
    return(`img[src="/images/quality-mug.jpg"]`)
}
get mugTitle(){
    return(`//h2[contains(text(),'Mug')]`)
}
get mugDescription(){
    return("//p[contains(text(),'Wampumtuk Pack of 2 Company Policies Boss Employee')]")
}
get mugPrice(){
    return('p+div')
}
get category(){
    return('.css-1ccau2i')
}
get backBtn(){
    return('.chakra-heading.css-18j379d')
}

viewQualityMugPage(){
    cy.get(this.qualityMug).click()
}
goBacktoProducts(){
    cy.get(this.backBtn).click()
}

}export default new Details