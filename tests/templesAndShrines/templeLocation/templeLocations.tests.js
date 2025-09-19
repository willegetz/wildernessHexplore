'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeLocationsModule = require('../../../src/templesAndShrines/templeLocation/templeLocations');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeLocations', function () {
    let d6Stub;

    this.afterEach(() => {
        if (d6Stub !== undefined) {
            d6Stub.restore();
        }
    });

    describe('getTempleLocation', function () {
        it('returns "hamlet" on a roll of 1', function () {
            d6Stub = sinon.stub(rpgDiceRollerWrapper, 'd6').returns({ roll: () => 1 });
            const templeLocations = templeLocationsModule(rpgDiceRollerWrapper);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'hamlet');
        });
        
        it('returns "town" on a roll of 3', function () {
            d6Stub = sinon.stub(rpgDiceRollerWrapper, 'd6').returns({ roll: () => 3 });
            const templeLocations = templeLocationsModule(rpgDiceRollerWrapper);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'town');
        });
        
        it('returns "other plane" on a roll of 6', function () {
            d6Stub = sinon.stub(rpgDiceRollerWrapper, 'd6').returns({ roll: () => 6 });
            const templeLocations = templeLocationsModule(rpgDiceRollerWrapper);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'other plane');
        });
    })
});