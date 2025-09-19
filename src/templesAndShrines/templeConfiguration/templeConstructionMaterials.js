'use strict';

const templeConstructionMaterials = function (rpgDiceRoller) {
    const d20 = rpgDiceRoller.d20();

    const constructionMaterials = [
        { roll: 1, result: 'adobe' },
        { roll: 2, result: 'silver' },
        { roll: 3, result: 'tin' },
        { roll: 4, result: 'granite' },
        { roll: 5, result: 'onyx' },
        { roll: 6, result: 'sod' },
        { roll: 7, result: 'wood' },
        { roll: 8, result: 'copper' },
        { roll: 9, result: 'gold' },
        { roll: 10, result: 'earth' },
        { roll: 11, result: 'quartz' },
        { roll: 12, result: 'sandstone' },
        { roll: 13, result: 'clay' },
        { roll: 14, result: 'iron' },
        { roll: 15, result: 'platinum' },
        { roll: 16, result: 'marble' },
        { roll: 17, result: 'bronze' },
        { roll: 18, result: 'crystal' },
        { roll: 19, result: 'brass' },
        { roll: 20, result: 'unknown material' }
    ]

    const getConstructionMaterial = function () {
        const dieResult = d20.roll();

        const constructionMaterial = constructionMaterials.filter(x => x.roll === dieResult)[0];

        return constructionMaterial.result;
    }

    return {
        getConstructionMaterial
    }
};

module.exports = templeConstructionMaterials;