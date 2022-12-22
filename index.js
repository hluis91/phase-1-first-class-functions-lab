// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = () => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier;
    }
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier*2;    
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier*3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers();
}