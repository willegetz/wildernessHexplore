'use strict';

const assert = require('assert');
const sinon = require('sinon');

const hamletFollowersModule = require('../../../../src/templesAndShrines/templeLocation/followers/hamletFollowers');
const rpgDiceRollerWrapper = require('../../../../src/wrappers/rpgDiceRollerWrapper');

describe('hamletFollowers', function () {
    let d6Stub;
    let d6RollStub;
    let d4Stub;
    let d4RollStub;

    let rpgDiceRollerFake = {
        d4: function () { },
        d6: function () { }
    }

    this.afterEach(() => {
        if (d4Stub !== undefined) {
            d4Stub.restore();
        }

        if (d6Stub !== undefined) {
            d6Stub.restore();
        }
    });

    describe('getFollowerCount', function () {
        describe('1 d4+1 followers', function () {
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

        describe('2 d6+2 followers', function () {
            it('returns "6" when a 2 is rolled followed by a 1 then a 1', function () {
                d6RollStub = sinon.stub();
                d6RollStub.onCall(0).returns(2);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 6);
            });

            it('returns "11" when a 2 is rolled followed by a 6 then a 1', function () {
                d6RollStub = sinon.stub();
                d6RollStub.onCall(0).returns(2);
                d6RollStub.onCall(1).returns(6);
                d6RollStub.onCall(2).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 11);
            });

            it('returns "11" when a 2 is rolled followed by a 1 then a 6', function () {
                d6RollStub = sinon.stub();
                d6RollStub.onCall(0).returns(2);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(6);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 11);
            });

            it('returns "16" when a 2 is rolled followed by a 6 then a 6', function () {
                d6RollStub = sinon.stub();
                d6RollStub.onCall(0).returns(2);
                d6RollStub.onCall(1).returns(6);
                d6RollStub.onCall(2).returns(6);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 16);
            });
        });

        describe('2 d4+2 followers', function () {
            it('returns "6" when a 3 is rolled followed by a 1 then a 1', function () {
                d6RollStub = sinon.stub().returns(3);

                d4RollStub = sinon.stub();
                d4RollStub.onCall(0).returns(1);
                d4RollStub.onCall(1).returns(1);

                rpgDiceRollerFake.d4 = function () {
                    return {
                        roll: d4RollStub
                    }
                }

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 6);
            });

            it('returns "9" when a 3 is rolled followed by a 4 then a 1', function () {
                d6RollStub = sinon.stub().returns(3);

                d4RollStub = sinon.stub();
                d4RollStub.onCall(0).returns(4);
                d4RollStub.onCall(1).returns(1);

                rpgDiceRollerFake.d4 = function () {
                    return {
                        roll: d4RollStub
                    }
                }

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 9);
            });

            it('returns "9" when a 3 is rolled followed by a 1 then a 4', function () {
                d6RollStub = sinon.stub().returns(3);

                d4RollStub = sinon.stub();
                d4RollStub.onCall(0).returns(1);
                d4RollStub.onCall(1).returns(4);

                rpgDiceRollerFake.d4 = function () {
                    return {
                        roll: d4RollStub
                    }
                }

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 9);
            });

            it('returns "12" when a 3 is rolled followed by a 4 then a 4', function () {
                d6RollStub = sinon.stub().returns(3);

                d4RollStub = sinon.stub();
                d4RollStub.onCall(0).returns(4);
                d4RollStub.onCall(1).returns(4);

                rpgDiceRollerFake.d4 = function () {
                    return {
                        roll: d4RollStub
                    }
                }

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 12);
            });
        });

        describe('2 d6+3 followers', function () {
            it('returns "8" when a 4 is rolled followed by a 1 then a 1', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(4);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 8);
            });

            it('returns "13" when a 4 is rolled followed by a 6 then a 1', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(4);
                d6RollStub.onCall(1).returns(6);
                d6RollStub.onCall(2).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 13);
            });

            it('returns "13" when a 4 is rolled followed by a 1 then a 6', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(4);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(6);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 13);
            });

            it('returns "18" when a 4 is rolled followed by a 6 then a 6', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(4);
                d6RollStub.onCall(1).returns(6);
                d6RollStub.onCall(2).returns(6);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 18);
            });
        });

        describe('3 d6+2 followers', function () {
            it('returns "9" when a 5 is rolled followed by a 1 then a 1 then a 1', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(5);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(1);
                d6RollStub.onCall(3).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 9);
            });
        });

        describe('2 d6+10 followers', function () {
            it('returns "22" when a 6 is rolled followed by a 1 then a 1', function () {
                d6RollStub = sinon.stub()
                d6RollStub.onCall(0).returns(6);
                d6RollStub.onCall(1).returns(1);
                d6RollStub.onCall(2).returns(1);

                rpgDiceRollerFake.d6 = function () {
                    return {
                        roll: d6RollStub
                    }
                }

                const hamletFollowers = hamletFollowersModule(rpgDiceRollerFake);

                const totalFollowers = hamletFollowers.getFollowerCount();

                assert.equal(totalFollowers, 22);
            });
        });
    });
});