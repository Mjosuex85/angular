import { Product, taxCalculator } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Surface',
        price: 200
    },
    {
        description: 'Guitar',
        price: 100
    }
]
const [total, totalTax] = taxCalculator({
    tax: 0.15, 
    products: shoppingCart
})

console.log('Total', total)
console.log('Tax', totalTax)