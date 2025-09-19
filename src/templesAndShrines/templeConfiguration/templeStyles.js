'use strict';

const templeStyles = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const templeStyles = [
        { roll: 1, result: 'a domed square' },
        { roll: 2, result: 'a pyramid' },
        { roll: 3, result: 'a parallelogram' },
        { roll: 4, result: 'a rectangular' },
        { roll: 5, result: 'an obelisk' },
        { roll: 6, result: 'a round' },
        { roll: 7, result: 'a square' },
        { roll: 8, result: 'a hemisphere' },
        { roll: 9, result: 'a geodesic dome' },
        { roll: 10, result: 'a rhomboid' },
    ]
    const getTempleStyle = function () {
        const dieResult = d10.roll();

        const templeStyle = templeStyles.filter(x => x.roll === dieResult)[0];

        return templeStyle.result;
    }

    return {
        getTempleStyle
    }
};

module.exports = templeStyles;  