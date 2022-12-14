import auth from "../page/auth"
import products from "../page/products"
import sort from "../page/sort"

describe('Filter and sort products',()=>{
    beforeEach(()=>{
        cy.visit('/')
        auth.login()
    })

    it('should sort from A to Z',()=>{
        cy.get(products.sortSelect).select('aToZ')
        const qualityProducts = ['Quality Stylish Shoes','Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat',
        'Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Trucker Hat','Quality Mousepad','Quality Mug','Quality Pillow',
        'Quality Pink Pants','Red Couch','Quality Sweatshirt','Quality Tshirt','Quality Vneck','White Couch']
        qualityProducts.sort()
        cy.wait(5000)

        cy.get(sort.productNames).each(($elem,index) =>{
            expect($elem.text()).equal(qualityProducts[index])
        })
    })

    it('should sort from Z to A',()=>{
        cy.get(products.sortSelect).select('zToA')
        const qualityProducts = ['Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat',
        'Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug','Quality Pillow',
        'Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt','Quality Vneck','Red Couch','White Couch']
        qualityProducts.sort().reverse()
        cy.wait(5000)
        cy.get(sort.productNames).each(($elem,index) =>{
            expect($elem.text()).equal(qualityProducts[index])
        })
    })

    it('should filter by category',()=>{
        cy.get(products.categorySelect).select('laptop') // selects the laptop option in the category field
        const laptops = ["Mackbook Pro","Dell Laptop","HP Laptop"]
        cy.wait(5000)
        cy.get(sort.productNames).each(($elem,index) =>{
            expect($elem.text()).equal(laptops[index])
        })
    })
})