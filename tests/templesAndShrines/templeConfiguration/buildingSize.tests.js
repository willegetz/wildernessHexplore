'use strict';

const assert = require('assert');
const sinon = require('sinon');

const buildingSizeModule = require('../../../src/templesAndShrines/templeConfiguration/buildingSize');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('buildingSize', function () {
    let d6Stub;
    let d10Stub;

    this.afterEach(() => {
        if (d6Stub !== undefined) {
            d6Stub.restore();
        }

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

        it('returns "4 stories" when a 4 is rolled followed by a 1', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 4 });
            d6Stub = sinon.stub(rpgDiceRollerWrapper, "d6").returns({ roll: () => 1 });
            const buildingSize = buildingSizeModule(rpgDiceRollerWrapper);

            const sizeOfBuilding = buildingSize.getBuildingSize();

            assert.equal(sizeOfBuilding, '4 stories');
        });

        it('returns "4 stories" when a 9 is rolled followed by a 6', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 4 });
            d6Stub = sinon.stub(rpgDiceRollerWrapper, "d6").returns({ roll: () => 6 });
            const buildingSize = buildingSizeModule(rpgDiceRollerWrapper);

            const sizeOfBuilding = buildingSize.getBuildingSize();

            assert.equal(sizeOfBuilding, '9 stories');
        });
    });
});