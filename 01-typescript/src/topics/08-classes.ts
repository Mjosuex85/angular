// MANERA INUSUAL EN ANGULAR, SI EN TYPESCRIPT

/* export class Person {
    public name: string 
    public address: string

    constructor(name: string, address: string) {
        this.name = name,
        this.address = address
    }
} */

// MANERA USUAL PARA ANGULAR

export class Person {

    constructor(
        public name: string,   //TODO: INYECCIÓN DE DEPENDENCIAS, MUY IMPORTANTE PARA ANGULAR
        public adreess: string = 'No Adress'
    ){}
}

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){}

}

const ironman = new Person("mario", "New York")

const hero = new Hero("Mario", 2, "ksks", ironman)

console.log("la class",hero )




