'use strict';

const assert = require('assert');
const sinon = require('sinon');

const templeStylesModule = require('../../../src/templesAndShrines/templeConfiguration/templeStyles');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('templeStyles', function () {

    let d10Stub;

    this.afterEach(() => {
        if (d10Stub !== undefined) {
            d10Stub.restore();
        }
    });

    describe('getTempleStyle', function () {
        it('returns "a domed square" when a 1 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 1 });
            const templeStyles = templeStylesModule(rpgDiceRollerWrapper);

            const styleOfTemple = templeStyles.getTempleStyle();

            assert.equal(styleOfTemple, 'a domed square');
        });

        it('returns "a pyramid" when a 2 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 2 });
            const templeStyles = templeStylesModule(rpgDiceRollerWrapper);

            const styleOfTemple = templeStyles.getTempleStyle();

            assert.equal(styleOfTemple, 'a pyramid');
        });

        it('returns "a parallelogram" when a 3 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 3 });
            const templeStyles = templeStylesModule(rpgDiceRollerWrapper);

            const styleOfTemple = templeStyles.getTempleStyle();

            assert.equal(styleOfTemple, 'a parallelogram');
        });

        it('returns "a rectangular" when a 4 is rolled', function () {
            d10Stub = sinon.stub(rpgDiceRollerWrapper, "d10").returns({ roll: () => 4 });
            const templeStyles = templeStylesModule(rpgDiceRollerWrapper);

            const styleOfTemple = templeStyles.getTempleStyle();

            assert.equal(styleOfTemple, 'a rectangular');
        });
    });
});