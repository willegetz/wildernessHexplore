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
        describe('4th', function () {
            it('returns "4th level" when a 1 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 1 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('4th level', leaderLevel);
            });
        });

        describe('5th', function () {
            it('returns "5th level" when a 2 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 2 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('5th level', leaderLevel);
            });

            it('returns "5th level" when a 3 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 3 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('5th level', leaderLevel);
            });
        });

        describe('6th level', function () {
            it('returns "6th level" when a 4 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 4 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('6th level', leaderLevel);
            });

            it('returns "6th level" when a 5 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 5 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('6th level', leaderLevel);
            });
        });

        describe('7th level', function () {
            it('returns "7th level" when a 6 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 6 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('7th level', leaderLevel);
            });

            it('returns "7th level" when an 8 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 8 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('7th level', leaderLevel);
            });
        });

        describe('8th level', function () {
            it('returns "8th level" when a 9 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 9 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('8th level', leaderLevel);
            });

            it('returns "8th level" when a 10 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 10 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('8th level', leaderLevel);
            });
        });

        describe('9th level', function () {
            it('returns "8th level" when an 11 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 11 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('9th level', leaderLevel);
            });

            it('returns "8th level" when a 12 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 12 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('9th level', leaderLevel);
            });
        });

        describe('10th level', function () {
            it('returns "10th level" when a 13 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 13 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('10th level', leaderLevel);
            });

            it('returns "10th level" when a 15 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 15 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('10th level', leaderLevel);
            });
        });

        describe('11th level', function () {
            it('returns "11th level" when a 16 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 16 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('11th level', leaderLevel);
            });

            it('returns "11th level" when an 18 is rolled', function () {
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 18 });

                const leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('11th level', leaderLevel);
            });
        });

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

            it('returns "19th level" when a 20 is rolled followed by a 8', function () {
                d8Stub = sinon.stub(rpgDiceRollerWrapper, 'd8').returns({ roll: () => 8 });
                d20Stub = sinon.stub(rpgDiceRollerWrapper, 'd20').returns({ roll: () => 20 });

                let leaderLevels = leaderLevelsModule(rpgDiceRollerWrapper);

                const leaderLevel = leaderLevels.getLeaderLevel();

                assert.equal('19th level', leaderLevel);
            });
        });
    });
});