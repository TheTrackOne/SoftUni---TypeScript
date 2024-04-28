interface TownPopulation {
    [townName: string] :number;
}

function townRegistry(data: string[]) :void {
    const TownPopulation :TownPopulation = {};

    for (const entry of data) {
        const [townName, populationStr] = entry.split(" <-> ");
        const population = parseInt(populationStr);

        if (TownPopulation.hasOwnProperty(townName)) {
            TownPopulation[townName] += population;
        }
        else {
            TownPopulation[townName] = population;
        }
    }

    for (const townName in TownPopulation) {
        console.log(`${townName} : ${TownPopulation[townName]}`);
    }
}


const townData :string[] = 
[
'Sofia <-> 1200000', 
'Montana <-> 20000', 
'New York <-> 10000000', 
'Washington <-> 2345000', 
'Las Vegas <-> 1000000'
];

townRegistry(townData);
