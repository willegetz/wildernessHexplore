'use strict';

const templeLocations = function(rpgDiceRoller){
    const d6 = rpgDiceRoller.d6();

    const templeLocations = [
        {roll: 1, result: 'hamlet'}
    ]

    const getTempleLocation = function(){
        const dieResult = d6.roll();

        const templeLocation = templeLocations.filter(x => x.roll === dieResult)[0];

        return templeLocation.result;
    }

    return {
        getTempleLocation
    }
};

module.exports = templeLocations;