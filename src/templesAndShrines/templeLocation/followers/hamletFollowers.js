'use strict';

const hamletFollowers = function (rpgDiceRoller) {
    const d4 = rpgDiceRoller.d4();
    const d6 = rpgDiceRoller.d6();

    const hamletFollowers = [
        {
            roll: 1, result: '1 d4+1 followers', action: function () {
                const dieResult = d4.roll();

                const followers = dieResult + 1;

                return followers;
            }
        },
        {
            roll: 2, result: '2 d6+2 followers', action: function () {
                const rollOne = d6.roll() + 2;
                const rollTwo = d6.roll() + 2;

                const followers = rollOne + rollTwo;

                return followers;
            }
        },
        {
            roll: 3, result: '2 d4+2 followers', action: function () {
                const rollOne = d4.roll() + 2;
                const rollTwo = d4.roll() + 2;

                const followers = rollOne + rollTwo;

                return followers;
            }
        },
        {
            roll: 4, result: '2 d6+3 followers', action: function () {
                const rollOne = d6.roll() + 3;
                const rollTwo = d6.roll() + 3;

                const followers = rollOne + rollTwo;

                return followers;
            }
        },
        {
            roll: 5, result: '3 d6+2 followers', action: function () {
                const rollOne = d6.roll() + 2;
                const rollTwo = d6.roll() + 2;
                const rollThree = d6.roll() + 2;

                const followers = rollOne + rollTwo + rollThree;

                return followers;
            }
        },
        {
            roll: 6, result: '2 d6+10 followers', action: function () {
                const rollOne = d6.roll() + 10;
                const rollTwo = d6.roll() + 10;

                const followers = rollOne + rollTwo;

                return followers;
            }
        }
    ]

    const getFollowerCount = function () {
        const dieResult = d6.roll();

        const followerCount = hamletFollowers.filter(x => x.roll === dieResult)[0];

        const totalFollowerCount = followerCount.action();

        return totalFollowerCount;
    }

    return {
        getFollowerCount
    }
};

module.exports = hamletFollowers;