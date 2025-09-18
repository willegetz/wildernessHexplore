'use strict';

const buildingSize = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();
    const d10 = rpgDiceRoller.d10();

    const buildingSizes = [
        { roll: 1, result: '1 story' },
        {
            roll: 4, result: 'multiple stories',
            action: function () {
                const dieResult = d6.roll();

                const numberOfStories = dieResult + 3;

                return `${numberOfStories} stories`;
            }
        }
    ]

    const getBuildingSize = function () {
        const dieResult = d10.roll();

        const buildingSize = buildingSizes.filter(x => x.roll === dieResult)[0];

        let description = buildingSize.result;

        const hasAction = buildingSize.action && typeof buildingSize.action === 'function';
        if(hasAction){
            description = buildingSize.action();
        }

        return description;
    }

    return {
        getBuildingSize
    }
};

module.exports = buildingSize;