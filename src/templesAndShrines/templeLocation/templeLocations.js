'use strict';

const templeLocations = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const templeLocations = [
        { roll: 1, result: 'hamlet' },
        { roll: 2, result: 'village' },
        { roll: 3, result: 'town' },
        { roll: 4, result: 'city' },
        { roll: 5, result: 'wilderness' },
        { roll: 6, result: 'other plane' }
    ]

    const getTempleLocation = function () {
        const dieResult = d6.roll();

        const templeLocation = templeLocations.filter(x => x.roll === dieResult)[0];

        return templeLocation.result;
    }

    return {
        getTempleLocation
    }
};

module.exports = templeLocations;