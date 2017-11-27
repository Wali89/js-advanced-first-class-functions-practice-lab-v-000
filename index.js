// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(element){
    console.log(element.name)
  });
}

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function(driver){
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}
