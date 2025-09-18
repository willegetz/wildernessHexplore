'use strict';

const assert = require('assert');
const sinon = require('sinon');

const buildingTypeModule = require('../../../src/templesAndShrines/templeConfiguration/buildingType');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('buildingType', function () {

    let d10Stub;

    this.afterEach(() => {
        if (d10Stub !== undefined) {
            d10Stub.restore();
        }
    });

    describe('getBuildingType', function () {
        it('returns "domed square" when a 1 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 1 });
            const buildingType = buildingTypeModule(rpgDiceRollerWrapper);

            const typeOfBuilding = buildingType.getBuildingType();

            assert.equal(typeOfBuilding, 'domed square');
        });

        it('returns "pyramid" when a 2 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 2 });
            const buildingType = buildingTypeModule(rpgDiceRollerWrapper);

            const typeOfBuilding = buildingType.getBuildingType();

            assert.equal(typeOfBuilding, 'pyramid');
        });

        it('returns "parallelogram" when a 3 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 3 });
            const buildingType = buildingTypeModule(rpgDiceRollerWrapper);

            const typeOfBuilding = buildingType.getBuildingType();

            assert.equal(typeOfBuilding, 'parallelogram');
        });

        it('returns "rectangle" when a 4 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 4 });
            const buildingType = buildingTypeModule(rpgDiceRollerWrapper);

            const typeOfBuilding = buildingType.getBuildingType();

            assert.equal(typeOfBuilding, 'rectangle');
        });
    });
});