'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeConditionsModule = require('../../../src/templesAndShrines/templeConfiguration/templeConditions');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeConditions', function () {
    let d10Stub;

    this.afterEach(() => {
        if (d10Stub !== undefined) {
            d10Stub.restore();
        }
    });

    describe('getTempleCondition', function () {
        it('returns "under construction" when a 1 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, 'd10').returns({ roll: () => 1 });
            const templeConditions = templeConditionsModule(rpgDiceRollerWrapper);

            const conditionOfTemple = templeConditions.getTempleCondition();

            assert.equal(conditionOfTemple, 'under construction');
        });
        
        it('returns "brand new" when a 2 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, 'd10').returns({ roll: () => 2 });
            const templeConditions = templeConditionsModule(rpgDiceRollerWrapper);

            const conditionOfTemple = templeConditions.getTempleCondition();

            assert.equal(conditionOfTemple, 'brand new');
        });
        
        it('returns "foundation only" when a 10 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, 'd10').returns({ roll: () => 10 });
            const templeConditions = templeConditionsModule(rpgDiceRollerWrapper);

            const conditionOfTemple = templeConditions.getTempleCondition();

            assert.equal(conditionOfTemple, 'foundation only');
        });
    });
});