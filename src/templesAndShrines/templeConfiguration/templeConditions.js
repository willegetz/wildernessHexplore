'use strict';

const templeConditions = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const templeConditions = [
        {roll: 1, result: 'under construction'},
        {roll: 2, result: 'a brand new'},
        {roll: 3, result: 'slightly aged'},
        {roll: 4, result: 'a worn'},
        {roll: 5, result: 'an aged'},
        {roll: 6, result: 'an ancient'},
        {roll: 7, result: 'a crumbling'},
        {roll: 8, result: 'a tumbled down'},
        {roll: 9, result: 'in ruins'},
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