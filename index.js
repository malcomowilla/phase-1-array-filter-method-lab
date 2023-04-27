// Code your solution here

function findMatching(drivers, name) {
      return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}

    //   const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function filter(safarDrivers,name, cb) {
//     const newDrivers = []
//     for (const driver of safarDrivers) {
//         if (cb(driver, name)) {
//             newDrivers.push(driver)
//         }
//     }
//     return newDrivers
// }



// filter(drivers, 'bobby', function FindMatching(driver, name){
//     return driver.toLowerCase() === name.toLowerCase()
// })



function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver === name)
}




function matchName(drivers, name) {
    return drivers.filter (driver => driver.name === name )
}


// function filter(arrayOfDrivers,name,cb) {
//     for (const driver of arrayOfDrivers) {
//         if (cb(driver, name)) {
//             return driver.name
//         }
//     }
// }




// filter(drivers, 'Bobby', function find_driver(driver, name) {
//     driver.name === name
// })








