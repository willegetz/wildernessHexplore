'use strict';

const templeStyles = function (rpgDiceRoller) {
    const d10 = rpgDiceRoller.d10();

    const templeStyles = [
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