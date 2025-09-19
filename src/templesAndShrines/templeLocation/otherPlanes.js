'use strict';

const otherPlanes = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const otherPlanes = [
        { roll: 1, result: 'elemental plane of fire' },
        { roll: 2, result: 'elemental plane of water' },
        { roll: 3, result: 'elemental plane of air' },
        { roll: 4, result: 'elemental plane of earth' },
        { roll: 5, result: 'ethereal plane' },
        { roll: 6, result: 'astral plane' }
    ]

    const getOtherPlanesLocation = function () {
        const dieResult = d6.roll();

        const otherPlane = otherPlanes.filter(x => x.roll === dieResult)[0];

        return otherPlane.result;
    }

    return {
        getOtherPlanesLocation
    }
};

module.exports = otherPlanes;