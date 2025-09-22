'use strict';

const assert = require('assert');
const sinon = require('sinon');

const leaderLevelsModule = require('../../../src/templesAndShrines/templeLeadership/leaderLevels');
const rpgDiceRollerWrapper = require('../../../src/wrappers/rpgDiceRollerWrapper');

describe('leaderLevels', function () {
    let d8Stub;
    let d20Stub;

    this.afterEach(() => {
        if (d8Stub !== undefined) {
            d8Stub.restore();
        }

        if (d20Stub !== undefined) {
            d20Stub.restore();
        }
    });

    describe('getLeaderLevel', function () {
        describe('11th +1d8', function () {
            it('returns "12th level" when a 19 is rolled followed by a 1', function () {
                d8Stub = sinon.stub(rpgDiceRollerWrapper, 'd8').returns({ roll: () => 1 });
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 19 });

                let leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('12th level', leaderLevel);
            });

            it('returns "19th level" when a 19 is rolled followed by a 8', function () {
                d8Stub = sinon.stub(rpgDiceRollerWrapper, 'd8').returns({ roll: () => 8 });
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 19 });

                let leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('19th level', leaderLevel);
            });

            it('returns "12th level" when a 20 is rolled followed by a 1', function () {
                d8Stub = sinon.stub(rpgDiceRollerWrapper, 'd8').returns({ roll: () => 1 });
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 20 });

                let leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('12th level', leaderLevel);
            });
        });
    });
});