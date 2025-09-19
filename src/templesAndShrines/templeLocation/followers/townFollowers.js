'use strict';

const townFollowers = function (rpgDiceRoller) {
    const d4 = rpgDiceRoller.d4();
    const d6 = rpgDiceRoller.d6();
    const d10 = rpgDiceRoller.d10();
    const d100 = rpgDiceRoller.d100();

    const townFollowers = [
        {
            roll: 1, result: '2d10 + 10 followers', action: function () {
                const rollOne = d10.roll();
                const rollTwo = d10.roll();

                const followers = rollOne + rollTwo + 10;

                return followers;
            }
        },
        {
            roll: 2, result: '1d100 + 10 followers', action: function () {
                const rollOne = d100.roll();

                const followers = rollOne + 10;

                return followers;
            }
        },
        {
            roll: 3, result: '3d6 + 40 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();
                const rollThree = d6.roll();

                const followers = rollOne + rollTwo + rollThree + 40;

                return followers;
            }
        },
        {
            roll: 4, result: '(1d6 x 10) + 30 followers', action: function () {
                const rollOne = d6.roll();

                const followers = (rollOne * 10) + 30;

                return followers;
            }
        },
        {
            roll: 5, result: '(1d4 + 1 x 10) + 30 followers', action: function () {
                const rollOne = d4.roll();

                const followers = ((rollOne + 1) * 10) + 30;

                return followers;
            }
        },
        {
            roll: 6, result: '1d100 + 50 followers', action: function () {
                const rollOne = d100.roll();

                const followers = rollOne + 50;

                return followers;
            }
        }
    ]

    const getFollowerCount = function () {
        const dieResult = d6.roll();

        const followerCount = townFollowers.filter(x => x.roll === dieResult)[0];

        const totalFollowerCount = followerCount.action();

        return totalFollowerCount;
    }

    return {
        getFollowerCount
    }
};

module.exports = townFollowers;