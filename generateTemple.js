'use strict';

const generateTemple = (function () {
    const rpgDiceRollerWrapper = require('./src/wrappers/rpgDiceRollerWrapper');

    const start = async function (args) {
        const templeConditions = require('./src/templesAndShrines/templeConfiguration/templeConditions')(rpgDiceRollerWrapper);
        const templeConstructionMaterials = require('./src/templesAndShrines/templeConfiguration/templeConstructionMaterials')(rpgDiceRollerWrapper);
        const templeSizes = require('./src/templesAndShrines/templeConfiguration/templeSizes')(rpgDiceRollerWrapper);
        const templeStyles = require('./src/templesAndShrines/templeConfiguration/templeStyles')(rpgDiceRollerWrapper);
        const templeLocations = require('./src/templesAndShrines/templeLocation/templeLocations')(rpgDiceRollerWrapper);

        const condition = templeConditions.getTempleCondition();
        const material = templeConstructionMaterials.getConstructionMaterial();
        const size = templeSizes.getTempleSize();
        const style = templeStyles.getTempleStyle();
        const location = templeLocations.getTempleLocation();

        const description = `A ${condition} ${style} temple made of ${material}, ${size}.
Located ${location}`;

        console.log(condition)
        console.log(material)
        console.log(size)
        console.log(style)
        console.log(location)
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