'use strict';

const rpgDiceRollerWrapper = (function () {
    const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');

    const d4Die = new rpgDiceRoller.Dice.StandardDice(4, 1, {}, 1, 4, 'Standard 1 to 4 die');
    const d6Die = new rpgDiceRoller.Dice.StandardDice(6, 1, {}, 1, 6, 'Standard 1 to 6 die');
    const d8Die = new rpgDiceRoller.Dice.StandardDice(8, 1, {}, 1, 8, 'Standard 1 to 8 die');
    const d10Die = new rpgDiceRoller.Dice.StandardDice(10, 1, {}, 1, 10, 'Standard 1 to 10 die');
    const d20Die = new rpgDiceRoller.Dice.StandardDice(20, 1, {}, 1, 20, 'Standard 1 to 20 die');
    const d100Die = new rpgDiceRoller.Dice.StandardDice(1000, 1, {}, 1, 100, 'Standard 1 to 100 die');

    const d4 = function () {
        return rollFunction(d4Die);
    }

    const d6 = function () {
        return rollFunction(d6Die);
    }

    const d8 = function () {
        return rollFunction(d8Die);
    }

    const d10 = function () {
        return rollFunction(d10Die);
    }

    const d20 = function () {
        return rollFunction(d20Die);
    }

    const d100 = function () {
        return rollFunction(d100Die);
    }

    const rollFunction = function (die) {
        return {
            roll: function () {
                const result = die.roll().value;
                return result;
            }
        }
    }

    return {
        d4,
        d6,
        d8,
        d10,
        d20,
        d100
    }
})();

module.exports = rpgDiceRollerWrapper;