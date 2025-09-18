'use strict';

const buildingSize = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();
    const d10 = rpgDiceRoller.d10();

    const buildingSizes = [
        { roll: 1, result: '1 story' },
        { roll: 2, result: '2 stories' },
        { roll: 3, result: '3 stories' },
        {
            roll: 4, result: 'multiple stories',
            action: function () {
                const dieResult = d6.roll();
                
                const numberOfStories = dieResult + 3;
                
                return `${numberOfStories} stories`;
            }
        },
        { roll: 5, result: '1 underground level' },
        { roll: 6, result: '1 underground Level + 1 story above ground' },
        { roll: 7, result: '2 underground levels' },
        { roll: 8, result: '2 underground levels + 1 story above ground' },
        { roll: 9, result: '3 underground levels' },
        { roll: 10, result: '3 underground levels + 1 story above ground' }
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