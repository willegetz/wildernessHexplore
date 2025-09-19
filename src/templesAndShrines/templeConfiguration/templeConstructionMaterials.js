'use strict';

const templeConstructionMaterials = function (rpgDiceRoller) {
    const d20 = rpgDiceRoller.d20();

    const constructionMaterials = [
        { roll: 1, result: 'adobe' },
        { roll: 10, result: 'earth' },
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