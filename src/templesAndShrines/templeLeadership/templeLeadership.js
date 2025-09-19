'use strict';

const templeLeadership = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const templeLeadershipCollection = [
        { min: 1, max: 4, result: 'a high priest' },
        { min: 5, max: 5, result: 'dual leadership' },
        { min: 6, max: 6, result: 'a triumvirates' }
    ]

    const getTempleLeadership = function () {
        const dieResult = 6;

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