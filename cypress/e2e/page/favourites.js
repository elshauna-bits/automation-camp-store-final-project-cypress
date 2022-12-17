class Favourites{
    get addFittedHatToFav(){
        return ('#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru #add-to-favorite')
    }
    get addMousepadToFav(){
        return("#product-1 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru #add-to-favorite")
    }
    get addQualityMugToFav(){
        return('#add-to-favorite')
    }
    get favouritesBtn(){
        return("#top-favorite")
    }
    get removeFittedHatFromFav(){
        return('#product-0 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru #remove-from-favorite > path')
    }
    get favPageText(){
        return('.chakra-text.css-jneyc')
    }
    get removeBtn(){
        return("#remove-favorite-btn")
    }


   

}export default new Favourites()