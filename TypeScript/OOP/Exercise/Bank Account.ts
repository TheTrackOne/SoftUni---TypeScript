class bankAccount {
    private static NextId = 1;
    private id :number;
    private balance :number = 0;
    private static interestRate :number = 0.02;

    constructor() {
        this.id = bankAccount.NextId++;
    }

    public static setInterestRate(rate: number): void {
        bankAccount.interestRate = rate;
    }

    public static getInterest() :number {
        return bankAccount.interestRate;
    }

    public deposit(amount:number) :void {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`);
    }
       
    public getInterest(years :number) :number {
        return this.balance * Math.pow(1 + bankAccount.interestRate, years) - this.balance;
    }
}

function testClient(commands: string[]): void {
    const accounts: Map<number, bankAccount> = new Map();

    for (const command of commands) {
        const [cmd, ...args] = command.split(' ');

        switch (cmd) {
            case 'Create':
                const account = new bankAccount();
                accounts.set(account.id, account);
                console.log(`Account ID${account.id} created`);
                break;
            
            case 'Deposit':
                const id = parseInt(args[0]);
                const amount = parseInt(args[1]);

                if (accounts.has(id)) {
                    const account = accounts.get(id);
                    account.deposit(amount);
                } else {
                    console.log(`Account does not exist`);
                }
                break;

            case 'SetInterest':
                const rate = parseFloat(args[0]);
                bankAccount.setInterestRate(rate);
                console.log(`Sets the global interest rate to ${rate}`);
                break;
            
            case 'GetInterest':
                const accountId = parseInt(args[0]);
                const years = parseInt(args[1]);

                if (accounts.has(accountId)) {
                    const account = accounts.get(accountId);
                    const interest = account.getInterest(years).toFixed(2);
                    console.log(`${interest}`);
                } else {
                    console.log(`Account does not exist`);
                }
                break;

            case 'End':
                console.log('End');
                break;
        }
    }
}

const commands: string[] = [
    'Create',
    'Deposit 1 20',
    'GetInterest 1 10',
    'End'
];

testClient(commands);
