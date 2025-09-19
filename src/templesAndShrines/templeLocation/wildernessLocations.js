'use strict';

const wildernessLocations = function (rpgDiceRoller) {
    const d20 = rpgDiceRoller.d20();

    const wildernessLocations = [
        { roll: 1, result: 'in a dense forest' },
        { roll: 2, result: 'in a meadow' },
        { roll: 3, result: 'in a cavern' },
        { roll: 4, result: 'on a cliff top' },
        { roll: 5, result: 'on a sea coast' },
        { roll: 6, result: 'in a hidden valley' },
        { roll: 7, result: 'underground' },
        { roll: 8, result: 'in a marsh' },
        { roll: 9, result: 'on a mountaintop' },
        { roll: 10, result: 'on a riverbank' },
        { roll: 11, result: 'in ruins' },
        { roll: 12, result: 'on an island' },
        { roll: 13, result: 'in a volcano' },
        { roll: 14, result: 'in a desert oasis' },
        { roll: 15, result: 'in a sacred grove' },
        { roll: 16, result: 'in a gorge' },
        { roll: 17, result: 'underwater' },
        { roll: 18, result: 'on the plains' },
        { roll: 19, result: 'in a crater' },
        { roll: 20, result: 'floating in sky' }
    ]

    const getWildernessLocation = function () {
        const dieResult = d20.roll();

        const wildernessLocation = wildernessLocations.filter(x => x.roll === dieResult)[0];

        return wildernessLocation.result;
    }

    return {
        getWildernessLocation
    }
};

module.exports = wildernessLocations;