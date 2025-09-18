'use strict';

const rpgDiceRollerWrapper = (function(){
    const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');

    const d10Die = new rpgDiceRoller.Dice.StandardDice(10, 1, {}, 1, 10, 'Standard 1 to 10 die');

    const d10 = function(){
        return {
            roll: function(){
                const result = d10Die.roll().value;
                return result;
            }
        }
    }

    return {
        d10
    }
})();

module.exports = rpgDiceRollerWrapper;