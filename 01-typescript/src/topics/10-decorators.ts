/* function classDecorator<T extends { new (...arg: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new Property';
        hello = 'new override'
        
    }
}

@classDecorator */

export class SuperClass {
    public myProperty: string = 'abc123'
    
    print() {
        console.log(this.myProperty)
    }
}

console.log('Definición de la clase',SuperClass);
const test = new SuperClass()
console.log('Instancia de la clase',test);


test.print()