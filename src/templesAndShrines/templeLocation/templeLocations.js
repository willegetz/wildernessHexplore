'use strict';

const templeLocations = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const templeLocations = [
        {
            roll: 1, result: 'hamlet', action: function () {
                const hamletFollowers = require('./followers/hamletFollowers')(rpgDiceRoller);
                const totalFollowerCount = hamletFollowers.getFollowerCount();

                const description = `hamlet with ${totalFollowerCount} followers`;

                return description;
            }
        },
        { roll: 2, result: 'village' },
        { roll: 3, result: 'town' },
        { roll: 4, result: 'city' },
        { roll: 5, result: 'wilderness' },
        { roll: 6, result: 'other plane' }
    ]

    const getTempleLocation = function () {
        const dieResult = d6.roll();

        const templeLocation = templeLocations.filter(x => x.roll === dieResult)[0];

        let description = templeLocation.result;
        const hasAction = templeLocation.action && typeof templeLocation.action === 'function';
        if(hasAction){
            description = templeLocation.action();
        }

        return description;
    }

    return {
        getTempleLocation
    }
};

module.exports = templeLocations;