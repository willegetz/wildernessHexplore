'use strict';

const generateTemple = (function () {
    const rpgDiceRollerWrapper = require('./src/wrappers/rpgDiceRollerWrapper');

    const start = async function (args) {
        const templeConditions = require('./src/templesAndShrines/templeConfiguration/templeConditions')(rpgDiceRollerWrapper);
        const templeConstructionMaterials = require('./src/templesAndShrines/templeConfiguration/templeConstructionMaterials')(rpgDiceRollerWrapper);
        const templeSizes = require('./src/templesAndShrines/templeConfiguration/templeSizes')(rpgDiceRollerWrapper);
        const templeStyles = require('./src/templesAndShrines/templeConfiguration/templeStyles')(rpgDiceRollerWrapper);
        const templeLocations = require('./src/templesAndShrines/templeLocation/templeLocations')(rpgDiceRollerWrapper);
        const templeLeadership = require('./src/templesAndShrines/templeLeadership/templeLeadership')(rpgDiceRollerWrapper);
        
        const condition = templeConditions.getTempleCondition();
        const material = templeConstructionMaterials.getConstructionMaterial();
        const size = templeSizes.getTempleSize();
        const style = templeStyles.getTempleStyle();
        const location = templeLocations.getTempleLocation();
        const leadership = templeLeadership.getTempleLeadership();

        const description = `The temple is ${condition}.
It is ${style} structure made of ${material}; ${size}.
It is located ${location}.
It is led by ${leadership}`;

        console.log(condition)
        console.log(material)
        console.log(size)
        console.log(style)
        console.log(location)
        console.log(leadership);
        console.log();
        console.log(description);
    };

    return {
        start
    }

})();

const cliEntryPoint = function (args, startFunc) {

    startFunc(args);
}

if (require.main === module) {
    const args = process.argv;


    const startFunc = generateTemple.start;
    cliEntryPoint(args, startFunc);
};

module.exports = {
    ...generateTemple,
    cliEntryPoint
}