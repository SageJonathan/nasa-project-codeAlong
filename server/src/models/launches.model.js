// const { httpGetAllLaunches } = require("../routes/launches/launches.controller");

const launches = new Map();

const launch = {
    mission: 'kepler Exploration X',
    rocket: 'Explorer Is1',
    launchDate: new Date('December 27, 2030'),
    destination: 'kepler-442 b',
    customer: ['ZTM','NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values())
}

module.exports ={
    getAllLaunches,
};