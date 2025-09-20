'use strict';

const cityFollowers = function (rpgDiceRoller) {
    const d4 = rpgDiceRoller.d4();
    const d6 = rpgDiceRoller.d6();
    const d10 = rpgDiceRoller.d10();
    const d100 = rpgDiceRoller.d100();

    const cityFollowers = [
        {
            roll: 1, result: '1d100 + 20 followers', action: function () {
                const rollOne = d100.roll();

                const followers = rollOne + 20;

                return followers;
            }
        },
        {
            roll: 2, result: '(1d4 x 10) + 50 followers', action: function () {
                const rollOne = d4.roll();

                const followers = (rollOne * 10) + 50;

                return followers;
            }
        },
        {
            roll: 3, result: '1d100 + 100 followers', action: function () {
                const rollOne = d100.roll();

                const followers = rollOne + 100;

                return followers;
            }
        },
        {
            roll: 4, result: '(2d6 x 10) + 150 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();

                const followers = ((rollOne + rollTwo) * 10) + 150;

                return followers;
            }
        },
        {
            roll: 5, result: '(3 d6x10) + 200 followers', action: function () {
                const rollOne = d6.roll() * 10;
                const rollTwo = d6.roll() * 10;
                const rollThree = d6.roll() * 10;

                const followers = rollOne + rollTwo + rollThree + 200;

                return followers;
            }
        },
        {
            roll: 6, result: '(1d4+1) x 100 followers', action: function () {
                const rollOne = d4.roll();

                const followers = rollOne * 100;

                return followers;
            }
        }
    ]

    const getFollowerCount = function () {
        const dieResult = d6.roll();

        const followerCount = cityFollowers.filter(x => x.roll === dieResult)[0];

        const totalFollowerCount = followerCount.action();

        return totalFollowerCount;
    }

    return {
        getFollowerCount
    }
};

module.exports = cityFollowers;