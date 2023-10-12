interface AudioPlayer{
    audioVolume: number;
    songDouration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDouration: 36,
    song: "Iris",
    details: {
        author: "Goo Goo Dolls",
        year: 1999
    }
}

// DESTRUCTURING OBJETOS
const {audioVolume: volumen } = audioPlayer
console.log(volumen)
/* const { details } = audioPlayer */
/* const { author: author } = details */


// DESTRUCTURING ARRAYS






export {}