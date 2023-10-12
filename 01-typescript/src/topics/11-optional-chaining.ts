interface Passenger {
    name: string;
    children?: string[];
};

const passenger2: Passenger = {
    name: "Cari"
};

const passenger1: Passenger = {
    name: "Mario",
    children: ["hijo1", "hijo2"]
};

const howMenyChildren = (passenger: Passenger): number => {
    
    const howMany = passenger.children?.length || 0;

    console.log(passenger.name, howMany)

    return howMany;
};

howMenyChildren(passenger1)

howMenyChildren(passenger2)