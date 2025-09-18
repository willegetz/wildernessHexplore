'use strict';

const assert = require('assert');
const sinon = require('sinon');

const buildingSizeModule = require('../../../src/templesAndShrines/templeConfiguration/buildingSize');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('buildingSize', function () {

    let d10Stub;

    this.afterEach(() => {
        if (d10Stub !== undefined) {
            d10Stub.restore();
        }
    });

    describe('getBuildingSize', function () {
        it('returns "1 story" when a 1 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 1 });
            const buildingSize = buildingSizeModule(rpgDiceRollerWrapper);

            const sizeOfBuilding = buildingSize.getBuildingSize();

            assert.equal(sizeOfBuilding, '1 story');
        });
    });
});