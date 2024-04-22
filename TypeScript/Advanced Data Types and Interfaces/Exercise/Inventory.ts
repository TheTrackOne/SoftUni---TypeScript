interface Hero {
    name :string,
    level :number,
    items :string[]
}

function createHero(data :string[]) :void {
    const heroes :Hero[] = [];

    for (const entry of data) {
        const[name, levelStr, itemsStr] = entry.split(' / ');
        const level = parseInt(levelStr);
        const items = itemsStr.split(', ');
        const hero :Hero = {name, level, items};
        heroes.push(hero);
    }

        heroes.sort((a, b) => a.level - b.level);

     for(const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(', ')}`);
    }

}

const heroData: string[] = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];
createHero(heroData);