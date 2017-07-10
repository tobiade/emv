/**
 * Created by Tobi on 7/9/2017.
 */
const MacroData = require('../models').MacroData
const express = require('express');
const router = express.Router();
//module.exports = {
//getAllMacroData
router.get('/', (request, response) => {
        /*return*/ MacroData
            .all()
            .then(allMacroData => response.status(200).send(allMacroData))
            .catch(error => response.status(400).send(error))
    }
);
router.get('/:country', (request,response) => {
    let countryRegularForm = request.params.country
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
        .trim();
    MacroData
        .findAll({where: {country: countryRegularForm}})
        .then(macroData => response.status(200).send(macroData))
        .catch(error => response.status(400).send(error));
});
router.get('/:country/:year', (request,response) => {
    let countryRegularForm = request.params.country
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
        .trim();
    MacroData
        .findAll({where: {country: countryRegularForm, year: request.params.year}})
        .then(macroData => response.status(200).send(macroData))
        .catch(error => response.status(400).send(error));
});
module.exports = router;

// getMacroDataForCountry(request,response){
//         return MacroData
//             .findAll({where: {country: request.country}})
//             .then(macroData => response.status(200).send(macroData))
//             .catch(error => response.status(400).send(error))
// }

//}