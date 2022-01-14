// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === str.toLowerCase();
    });
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().indexOf(str.toLowerCase()) === 0;
    });
}

function matchName(drivers, str) {
    return drivers.filter(function(driver) {
        return driver.name === str;
    });
}