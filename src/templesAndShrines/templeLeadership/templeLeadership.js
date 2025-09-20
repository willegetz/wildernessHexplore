'use strict';

const templeLeadership = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const templeLeadershipCollection = [
        { min: 1, max: 4, result: 'a high priest' },
        { min: 5, max: 5, result: 'a dual leadership of priests' },
        { min: 6, max: 6, result: 'a triumvirate of priests' }
    ]

    const getTempleLeadership = function () {
        const dieResult = d6.roll();

        const templeLeadership = templeLeadershipCollection.filter(x => {
            const inRange = x.min <= dieResult && x.max >= dieResult;
            
            if (inRange) {
                return x;
            }
        })[0];

        return templeLeadership.result;
    }

    return {
        getTempleLeadership
    }
};

module.exports = templeLeadership;