const { getAlLaunches} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAlLaunches);
}

module.exports = { httpGetAllLaunches }; 