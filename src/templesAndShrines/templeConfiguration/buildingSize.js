'use strict';

const buildingSize = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const buildingSizes = [
        { roll: 1, result: '1 story' },
        { roll: 4, result: '4 stories' }
    ]

    const getBuildingSize = function () {
        const dieResult = d10.roll();

        const buildingSize = buildingSizes.filter(x => x.roll === dieResult)[0];

        return buildingSize.result;
    }

    return {
        getBuildingSize
    }
};

module.exports = buildingSize;