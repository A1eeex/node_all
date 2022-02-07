// Obj property shorthand
//
// const name = 'Alex'
// const userAge = 24
//
// const user = {
//     name,
//     age: userAge,
//     location: 'Zbarazh'
// }
// console.log(user)

// Obj destructing

const product = {
    label: 'red notebook',
    price: 3,
    stock: 213,
    salePrice: null
}
// const label = product.price
// console.log(label)

const {label: prodLabel, price, stock} = product
console.log(prodLabel, stock, price)
