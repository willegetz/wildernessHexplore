'use strict';

const buildingType = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const buildingTypes = [
        { roll: 1, result: 'domed square' },
        { roll: 2, result: 'pyramid' },
        { roll: 3, result: 'parallelogram' },
        { roll: 4, result: 'rectangle' },
        { roll: 5, result: 'obelisk' },
        { roll: 6, result: 'round' },
        { roll: 7, result: 'square' },
        { roll: 8, result: 'hemisphere' },
        { roll: 9, result: 'geodesic dome' },
        { roll: 10, result: 'rhomboid' },
    ]
    const getBuildingType = function () {
        const dieResult = d10.roll();

        const buildingType = buildingTypes.filter(x => x.roll === dieResult)[0];

        return buildingType.result;
    }

    return {
        getBuildingType
    }
};

module.exports = buildingType;  