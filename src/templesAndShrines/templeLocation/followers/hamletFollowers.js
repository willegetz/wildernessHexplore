'use strict';

const hamletFollowers = function (rpgDiceRoller) {
    const d4 = rpgDiceRoller.d4();
    const d6 = rpgDiceRoller.d6();

    const hamletFollowers = [
        {
            roll: 1, result: '1d4 + 1 followers', action: function () {
                const dieResult = d4.roll();

                const followers = dieResult + 1;

                return followers;
            }
        },
        {
            roll: 2, result: '2d6 + 2 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();

                const followers = rollOne + rollTwo + 2;

                return followers;
            }
        },
        {
            roll: 3, result: '2d4 + 2 followers', action: function () {
                const rollOne = d4.roll();
                const rollTwo = d4.roll();

                const followers = rollOne + rollTwo + 2;

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