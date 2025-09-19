'use strict';

const assert = require('assert');
const sinon = require('sinon');

const hamletFollowersModule = require('../../../../src/templesAndShrines/templeLocation/followers/hamletFollowers');
const rpgDiceRollerWrapper = require('../../../../src/wrappers/rpgDiceRollerWrapper');

describe('hamletFollowers', function () {
    let d6Stub;
    let d4Stub;

    this.afterEach(() => {
        if (d4Stub !== undefined) {
            d4Stub.restore();
        }

        if (d6Stub !== undefined) {
            d6Stub.restore();
        }
    });

    describe('getFollowerCount', function () {
        it('returns "2" when a 1 is rolled followed by a 1', function () {
            d4Stub = sinon.stub(rpgDiceRollerWrapper, 'd4').returns({ roll: () => 1 });
            d6Stub = sinon.stub(rpgDiceRollerWrapper, 'd6').returns({ roll: () => 1 });

            const hamletFollowers = hamletFollowersModule(rpgDiceRollerWrapper);

            const totalFollowers = hamletFollowers.getFollowerCount();

            assert.equal(totalFollowers, 2);
        });

        it('returns "5" when a 1 is rolled followed by a 4', function () {
            d4Stub = sinon.stub(rpgDiceRollerWrapper, 'd4').returns({ roll: () => 4 });
            d6Stub = sinon.stub(rpgDiceRollerWrapper, 'd6').returns({ roll: () => 1 });

            const hamletFollowers = hamletFollowersModule(rpgDiceRollerWrapper);

            const totalFollowers = hamletFollowers.getFollowerCount();

            assert.equal(totalFollowers, 5);
        });
    });
});