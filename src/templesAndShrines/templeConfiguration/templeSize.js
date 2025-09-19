'use strict';

const templeSize = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();
    const d10 = rpgDiceRoller.d10();

    const templeSizes = [
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

    const getTempleSize = function () {
        const dieResult = d10.roll();

        const templeSize = templeSizes.filter(x => x.roll === dieResult)[0];

        let description = templeSize.result;

        const hasAction = templeSize.action && typeof templeSize.action === 'function';
        if(hasAction){
            description = templeSize.action();
        }

        return description;
    }

    return {
        getTempleSize
    }
};

module.exports = templeSize;