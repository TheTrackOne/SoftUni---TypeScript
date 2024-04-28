interface Town {
    name :string,
    latitude :number,
    longitude :number
}

function createTown(data:string[]) :Town[] {
    const towns :Town[] = [];

    for (const entry of data) {
        const [name, latitudeStr, longitudeStr] = entry.split(" | ");
        const latitude:number = parseInt(latitudeStr);
        const longitude:number = parseInt(longitudeStr);
        const town :Town = {name, latitude, longitude};
        towns.push(town);
    }

   return towns;

  
}
const towsData :string[] = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];
const towns = createTown(towsData);
console.log(towns);