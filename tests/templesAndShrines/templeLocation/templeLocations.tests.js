'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeLocationsModule = require('../../../src/templesAndShrines/templeLocation/templeLocations');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeLocations', function () {
    let d6Stub;

    let rpgDiceRollerFake = {
        d4: function () { },
        d6: function () { }
    }

    this.afterEach(() => {
        if (d6Stub !== undefined) {
            d6Stub.restore();
        }
    });

    describe('getTempleLocation', function () {
        it('returns "hamlet with 4 followers" on a roll of 1 followed by 3 then 1 then 1', function () {
            const d4RollStub = sinon.stub();
            d4RollStub.onCall(0).returns(1);
            d4RollStub.onCall(1).returns(1);

            const d6RollStub = sinon.stub();
            d6RollStub.onCall(0).returns(1);
            d6RollStub.onCall(1).returns(3);

            rpgDiceRollerFake.d4 = function(){
                return {
                    roll: d4RollStub
                }
            }

            rpgDiceRollerFake.d6 = function(){
                return {
                    roll: d6RollStub
                }
            }

            const templeLocations = templeLocationsModule(rpgDiceRollerFake);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'hamlet with 4 followers');
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