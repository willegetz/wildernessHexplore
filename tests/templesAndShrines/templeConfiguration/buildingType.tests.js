'use strict';

const assert = require('assert');

const buildingTypeModule = require('../../../src/templesAndShrines/templeConfiguration/buildingType');
describe('buildingType', function () {
    describe('getBuildingType', function () {
        it('returns "domed square" when a 1 is rolled', function () {
            const buildingType = buildingTypeModule();
            const typeOfBuilding = buildingType.getBuildingType();
            
            assert.equal(typeOfBuilding, 'domed square');
        });
    });
});