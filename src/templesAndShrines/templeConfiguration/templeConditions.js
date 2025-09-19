'use strict';

const templeConditions = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const templeConditions = [
        {roll: 1, result: 'under construction'}
    ]

    const getTempleCondition = function(){
        const dieResult = d10.roll();

        const templeCondition = templeConditions.filter(x => x.roll === dieResult)[0];

        return templeCondition.result;
    }

    return {
        getTempleCondition
    }
};

module.exports = templeConditions;