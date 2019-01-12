export class Loan{
    amount: number;
    rate: number;
    length: number;
    monthlyPayment: number;

    constructor(amount: number, rate: number, length: number, monthlyPayment: number) {
        this.amount = amount;
        this.rate = rate;
        this.length = length;
        this.monthlyPayment = monthlyPayment;
    }

    getAmount(){
        return this.amount;
    }
}