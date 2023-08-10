// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    if (drivers.length >= 2) {
        return [drivers[0], drivers[1]];
    } else {
        return "there is less than two drivers";
    }
};


const returnLastTwoDrivers = function (drivers) {
    if (drivers.length >= 2) {
        return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
    } else {
        return "there is less than two drivers";
    }
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplier) {
    const fareMultiplier = (fare) => fare * multiplier;
    return fareMultiplier;
};


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function (drivers, callback) {
    return callback(drivers);
};