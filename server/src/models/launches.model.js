// const { httpGetAllLaunches } = require("../routes/launches/launches.controller");

const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
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
};

function addNewLaunch (launch){
    latestFlightNumber += 100;
    launches.set(latestFlightNumber, Object.assign(launch,{
        flightNumber : latestFlightNumber,
        customers: ['ZTM','NASA'],
        upcoming: true,
        success: true,
    }));
};

module.exports ={
    getAllLaunches,
    addNewLaunch
};