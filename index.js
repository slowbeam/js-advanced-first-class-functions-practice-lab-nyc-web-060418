// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {console.log(driver.name)}
)};

const logDriversByHometown = function (drivers, location) {

  drivers.forEach(function (driver){
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
};

const driversByRevenue = function (drivers) {
  const sortedDrivers = [...drivers]
  return sortedDrivers.sort(function (a,b){
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {

  const sortedDrivers = [...drivers]

  return sortedDrivers.sort(function(a, b){
    return a.name.localeCompare(b.name);
  })

  return sortedDrivers
};

const totalRevenue = function (drivers) {
    const newDrivers = [...drivers];

    const sumRevenues = function (agg, el, i , drivers){
      return agg + el.revenue
    };

    return newDrivers.reduce(sumRevenues, 0)

};

const averageRevenue = function (drivers) {
  const newDrivers = [...drivers];

    const totalRev = totalRevenue(drivers)

    return totalRev / drivers.length;
};
