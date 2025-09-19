'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeConstructionMaterialsModule = require('../../../src/templesAndShrines/templeConfiguration/templeConstructionMaterials');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeConstructionMaterials', function () {
    let d20Stub;

    this.afterEach(() => {
        if (d20Stub !== undefined) {
            d20Stub.restore();
        }
    });

    describe('getConstructionMaterial', function () {
        it('returns "adobe" when a 1 is rolled', function () {
            d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 1 });
            const templeConstructionMaterials = templeConstructionMaterialsModule(rpgDiceRollerWrapper);

            const materialOfConstruction = templeConstructionMaterials.getConstructionMaterial();

            assert.equal(materialOfConstruction, 'adobe');
        });
        
        it('returns "earth" when a 10 is rolled', function () {
            d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 10 });
            const templeConstructionMaterials = templeConstructionMaterialsModule(rpgDiceRollerWrapper);

            const materialOfConstruction = templeConstructionMaterials.getConstructionMaterial();

            assert.equal(materialOfConstruction, 'earth');
        });
    });
});