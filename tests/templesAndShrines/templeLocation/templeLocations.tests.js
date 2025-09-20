'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeLocationsModule = require('../../../src/templesAndShrines/templeLocation/templeLocations');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeLocations', function () {
    let d6Stub;

    let rpgDiceRollerFake = {
        d4: function () { },
        d6: function () { },
        d10: function () { },
        d100: function () { }
    }

    this.afterEach(() => {
        if (d6Stub !== undefined) {
            d6Stub.restore();
        }
    });

    describe('getTempleLocation', function () {
        it('returns "in a hamlet with 6 followers" on a roll of 1 followed by 3 then 1 then 1', function () {
            const d4RollStub = sinon.stub();
            d4RollStub.onCall(0).returns(1);
            d4RollStub.onCall(1).returns(1);

            const d6RollStub = sinon.stub();
            d6RollStub.onCall(0).returns(1);
            d6RollStub.onCall(1).returns(3);

            rpgDiceRollerFake.d4 = function () {
                return {
                    roll: d4RollStub
                }
            }

            rpgDiceRollerFake.d6 = function () {
                return {
                    roll: d6RollStub
                }
            }

            const templeLocations = templeLocationsModule(rpgDiceRollerFake);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'in a hamlet with 6 followers');
        });

        it('returns "in a town with 90 followers" on a roll of 3 followed by 4 then 6', function () {
            const d6RollStub = sinon.stub();
            d6RollStub.onCall(0).returns(3);
            d6RollStub.onCall(1).returns(4);
            d6RollStub.onCall(2).returns(6);

            rpgDiceRollerFake.d6 = function () {
                return {
                    roll: d6RollStub
                }
            }

            const templeLocations = templeLocationsModule(rpgDiceRollerFake);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'in a town with 90 followers');
        });

        it('returns "on the elemental plane of earth" on a roll of 6', function () {
            const d6RollStub = sinon.stub();
            d6RollStub.onCall(0).returns(6);
            d6RollStub.onCall(1).returns(4);

            rpgDiceRollerFake.d6 = function () {
                return {
                    roll: d6RollStub
                }
            }

            const templeLocations = templeLocationsModule(rpgDiceRollerFake);

            const locationOfTemple = templeLocations.getTempleLocation();

            assert.equal(locationOfTemple, 'on the elemental plane of earth');
        });
    });
});