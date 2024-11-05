class Dice {
    constructor(numDice = 5) {
        this.numDice = numDice;
        this.diceValues = Array(numDice).fill(1);
        this.heldDice = Array(numDice).fill(false);
    }

    roll() {
        this.diceValues = this.diceValues.map((value, index) =>
            this.heldDice[index] ? value : Math.floor(Math.random() * 6) + 1
        );
        return this.diceValues;
    }

    toggleHold(index) {
        if (index >= 0 && index < this.numDice) {
            this.heldDice[index] = !this.heldDice[index];
        }
    }

    reset() {
        this.diceValues.fill(1);
        this.heldDice.fill(false);
    }
}

export default Dice;
