/* function addNumbers (a: number, b: number): void {
    console.log(a + b)
};

const addNumbersArrows = (a: number, b: number): string => {
    return `${a + b}`
};


function multyplay(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base
};

const multyplayResult: number = multyplay(2); */


/* console.log({result: addNumbers(2, 3)})
console.log({result: addNumbersArrows(2, 4)})
console.log({multyplayResult});
*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number): string => {

    // TODO: Crear lógica para que lo maximo que se pueda llenar al personaje sea 200, 
    // TODO: Si el personaje tiene 170 puntos, debe subir a 100, por más que se le pase más de 30

    character.hp 

    if (character.hp < 200) {
        character.hp += amount
    }

    else {
        return `no se puede curar más al personaje`
    }

    return `${character.name} Ha aumentado su HP a ${character.hp}`
    
}


const ironMan: Character = {
    name: "Iron Man",
    hp: 20,
    showHp(){
        console.log(`Su poder es de ${this.hp}`)
    }
};

healCharacter(ironMan, 200);
ironMan.showHp()


export {};