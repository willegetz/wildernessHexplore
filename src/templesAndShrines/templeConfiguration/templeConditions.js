'use strict';

const templeConditions = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const templeConditions = [
        {roll: 1, result: 'under construction'},
        {roll: 2, result: 'brand new'},
        {roll: 10, result: 'foundation only'}
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