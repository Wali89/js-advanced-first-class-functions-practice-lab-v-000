// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  const revenueSorter = function (num1, num2){
    return num1 - num2;
  };
  drivers.sort(revenueSorter);
}
