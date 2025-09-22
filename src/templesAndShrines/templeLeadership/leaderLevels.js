'use strict';

const leaderLevels = function (rpgDiceRoller) {
    const d8 = rpgDiceRoller.d8();
    const d20 = rpgDiceRoller.d20();

    const leaderLevels = [
        {
            min: 1, max: 1, result: `4th`, action: function () {
                return '4th level';
            }
        },
        {
            min: 2, max: 3, result: `5th`, action: function () {
                return '5th level';
            }
        },
        {
            min: 4, max: 5, result: `6th`, action: function () {
                return '6th level';
            }
        },
        {
            min: 6, max: 8, result: `7th`, action: function () {
                return '7th level';
            }
        },
        {
            min: 9, max: 10, result: `8th`, action: function () {
                return '8th level';
            }
        },
        {
            min: 11, max: 12, result: `9th`, action: function () {
                return '9th level';
            }
        },
        {
            min: 13, max: 15, result: `10th`, action: function () {
                return '10th level';
            }
        },
        {
            min: 16, max: 18, result: `11th`, action: function () {
                return '11th level';
            }
        },
        {
            min: 19, max: 20, result: `11th +1d8`, action: function () {
                const dieResult = d8.roll();
                const level = 11 + dieResult;

                return `${level}th level`;
            }
        }
    ]

    const getLeaderLevel = function () {
        const dieResult = d20.roll();

        const leaderLevel = leaderLevels.filter(x => {
            const inRange = x.min <= dieResult && x.max >= dieResult;

            if (inRange) {
                return x;
            }
        })[0];

        return leaderLevel.action();
    }

    return {
        getLeaderLevel
    }
};

module.exports = leaderLevels;