'use strict';

const rpgDiceRollerWrapper = (function () {
    const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');

    const d6Die = new rpgDiceRoller.Dice.StandardDice(6, 1, {}, 1, 6, 'Standard 1 to 6 die');
    const d10Die = new rpgDiceRoller.Dice.StandardDice(10, 1, {}, 1, 10, 'Standard 1 to 10 die');

    const d6 = function () {
        return rollFunction(d6Die);
    }

    const d10 = function () {
        return rollFunction(d10Die);
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
        d6,
        d10
    }
})();

module.exports = rpgDiceRollerWrapper;