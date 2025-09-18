'use strict';

const buildingType = function(){
    const getBuildingType = function(){
        const dieResult = 1;

        return 'domed square';
    }

    return {
        getBuildingType
    }
};

module.exports = buildingType;  