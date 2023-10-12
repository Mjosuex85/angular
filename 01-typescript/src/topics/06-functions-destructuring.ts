const tax = 0.15

export interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: "Nokie A1",
    price: 150.0
}

const tablet: Product = {
    description: "Mac Air",
    price: 250.0
}

interface taxCalculationOptions {
    tax: number;
    products: Product[];
}

const shoppingCart = [phone, tablet];

export const taxCalculator = ( options: taxCalculationOptions ): [number, number] => {
    
    let total = 0;
    const { products, tax } = options

    products.forEach(( { price } ) => {
        total += price;
    });

    return [total, total * tax];
};

const toPay: taxCalculationOptions = {
    tax: tax,
    products: shoppingCart
}

console.log(taxCalculator(toPay))

const [ total, totalTax ] = taxCalculator({ // retorna un array
    products: shoppingCart,
    tax: tax
})

console.log(total, totalTax);

export {};