class Pokemon {
    constructor (
        public name: string,
        public element: string,
        public health: number
    ) {}
}

class Trainer {
    public badges: number = 0;
    public pokemonCollection: Pokemon[] = [];

    constructor(public name: string) {}

    public addPokemon(pokemon: Pokemon): void {
        this.pokemonCollection.push(pokemon);
    }

    public checkElement(element: string): void {
        const hasElement = this.pokemonCollection.some(pokemon => pokemon.element === element);

        if (hasElement) {
            this.badges++;
        }
        else {
            this.pokemonCollection.forEach(pokemon => {
                pokemon.health -= 10;
            });
            this.pokemonCollection = this.pokemonCollection.filter(pokemon => pokemon.health > 0);
        }
    }

    public getNumbersOfPokemon(): number {
        return this.pokemonCollection.length;
    }
}

function handleTournament(input: string[]): void {
    const trainers: Map<string, Trainer> = new Map();

    for (const line of input) {
        if (line === "Tournament") {
            break;
        }

        const [trainerName, pokemonName, pokemonElement, pokemonHealth] = line.split(" ");
        const health = parseInt(pokemonHealth);
        const pokemon = new Pokemon(pokemonName, pokemonElement, health);

        let trainer = trainers.get(trainerName);
        if (!trainer) {
            trainer = new Trainer(trainerName);
            trainers.set(trainerName, trainer);
        }

        trainer.addPokemon(pokemon);
    }

    input.slice(trainers.size + 1).forEach(command => {
        if (command === "End") {
            return;
        }

        trainers.forEach(trainer => {
            trainer.checkElement(command);
        });
    });

    const sortedTrainers = Array.from(trainers.values()).sort((a, b) => b.badges - a.badges);

    sortedTrainers.forEach(trainer => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.getNumbersOfPokemon()}`);
    });
}

const input: string[] = [
    'Ash Pikachu Electricity 100',
    'Misty Starmie Water 90',
    'Brock Onix Rock 100',
    'Tournament',
    'Fire',
    'Electricity',
    'End'
];

handleTournament(input);
