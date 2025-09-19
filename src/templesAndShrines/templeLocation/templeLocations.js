'use strict';

const templeLocations = function (rpgDiceRoller) {
    const d6 = rpgDiceRoller.d6();

    const templeLocations = [
        {
            roll: 1, result: 'hamlet', action: function () {
                const hamletFollowers = require('./followers/hamletFollowers')(rpgDiceRoller);
                const totalFollowerCount = hamletFollowers.getFollowerCount();

                const description = `in a hamlet with ${totalFollowerCount} followers`;

                return description;
            }
        },
        {
            roll: 2, result: 'village', action: function () {
                const villageFollowers = require('./followers/villageFollowers')(rpgDiceRoller);
                const totalFollowerCount = villageFollowers.getFollowerCount();

                const description = `in a village with ${totalFollowerCount} followers`;

                return description;
            }
        },
        {
            roll: 3, result: 'town', action: function () {
                const townFollowers = require('./followers/townFollowers')(rpgDiceRoller);
                const totalFollowerCount = townFollowers.getFollowerCount();

                const description = `in a town with ${totalFollowerCount} followers`;

                return description;
            }
        },
        {
            roll: 4, result: 'city', action: function () {
                const cityFollowers = require('./followers/cityFollowers')(rpgDiceRoller);
                const totalFollowerCount = cityFollowers.getFollowerCount();

                const description = `in a city with ${totalFollowerCount} followers`;

                return description;
            }
        },
        {
            roll: 5, result: 'wilderness', action: function () {
                const wildernessLocation = require('./wildernessLocations')(rpgDiceRoller);
                const location = wildernessLocation.getWildernessLocation();

                const description = `${location}`;

                return description;
            }
        },
        {
            roll: 6, result: 'other plane', action: function () {
                const otherPlaneLocations = require('./otherPlanes')(rpgDiceRoller);
                const location = otherPlaneLocations.getOtherPlanesLocation();

                const description = `on the ${location}`;

                return description;
            }
        }
    ]

    const getTempleLocation = function () {
        const dieResult = d6.roll();

        const templeLocation = templeLocations.filter(x => x.roll === dieResult)[0];

        let description = templeLocation.result;
        const hasAction = templeLocation.action && typeof templeLocation.action === 'function';
        if (hasAction) {
            description = templeLocation.action();
        }

        return description;
    }

    return {
        getTempleLocation
    }
};

module.exports = templeLocations;