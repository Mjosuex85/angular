export function whatsMyType<T> (arg: T): T {
    return arg
};

let imString = whatsMyType<string>("string return");
let imNumber = whatsMyType<number>(123);
let imArray = whatsMyType<number[]>([1, 2, 3, 4])

console.log(imString.trim());
console.log(imNumber.toString())
console.log(imArray.map((e) => e*2))
