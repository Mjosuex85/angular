const skills: string[] = ['bash', 'Counter', 'Healing', "true", "123"];


interface Hero {
    name: string,
    hp: number,
    skills?: string[]
}

const newHero: Hero = {
    name: "mario",
    hp: 12,
    skills: skills   
}

console.log(newHero)




export {}