

class Cart {
    get cartIcon(){
      return('#top-cart')  
    }
    get increaseQuantity(){
        return('button[title="Increment quantity"]')
    }
    get decreaseQuantity(){
        return ('button[title="Decrement quantity"]')
    }
    get deleteItem(){
        return('button[title="Remove item"]')
    }
    get itemAmount(){
        return('.snipcart__font--secondary.snipcart__font--regular')
    }
    get cartItem(){
        return('.snipcart-item-line__product')
    }

    increaseItemQuantity(){
       cy.wait(6000)
       cy.get(this.cartIcon).click()
       cy.get(this.increaseQuantity).click() 
    }
    decreaseItemQuantity(){
        cy.wait(6000)
        cy.get(this.cartIcon).click()
        cy.get(this.decreaseQuantity).click()
    }
    deleteItemFromCart(){
        cy.wait(6000)
        cy.get(this.cartIcon).click()
        cy.get(this.deleteItem).click()
    }
}
export default new Cart()