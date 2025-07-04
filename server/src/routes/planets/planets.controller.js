const planets = require('../../models/planets.model');

function getAllPlanets(req,res){
   return res.status(200).json(planets);
//    return res.status(200).json(await getAllPlanets());
}

module.exports = getAllPlanets;