'use strict';

const villageFollowers = function (rpgDiceRoller) {
    const d4 = rpgDiceRoller.d4();
    const d6 = rpgDiceRoller.d6();

    const villageFollowers = [
        {
            roll: 1, result: '3d6 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();
                const rollThree = d6.roll();

                const followers = rollOne + rollTwo + rollThree;

                return followers;
            }
        },
        {
            roll: 2, result: '2d6 + 8 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();

                const followers = rollOne + rollTwo + 8;

                return followers;
            }
        },
        {
            roll: 3, result: '3d6 + 10 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();
                const rollThree = d6.roll();

                const followers = rollOne + rollTwo + rollThree + 10;

                return followers;
            }
        },
        {
            roll: 4, result: '2d6 + 20 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();

                const followers = rollOne + rollTwo + 20;

                return followers;
            }
        },
        {
            roll: 5, result: '3d6 + 25 followers', action: function () {
                const rollOne = d6.roll();
                const rollTwo = d6.roll();
                const rollThree = d6.roll();

                const followers = rollOne + rollTwo + rollThree + 25;

                return followers;
            }
        },
        {
            roll: 6, result: '(1d4 + 1) x 10 followers', action: function () {
                const rollOne = d4.roll();

                const followers = (rollOne + 1) * 10;

                return followers;
            }
        }
    ]

    const getFollowerCount = function () {
        const dieResult = d6.roll();

        const followerCount = villageFollowers.filter(x => x.roll === dieResult)[0];

        const totalFollowerCount = followerCount.action();

        return totalFollowerCount;
    }

    return {
        getFollowerCount
    }
};

module.exports = villageFollowers;