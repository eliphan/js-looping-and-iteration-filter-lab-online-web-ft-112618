// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  let stringLenght = string.length;
  drivers.filter(function (letter) {
    return name.slice(0) === name
  })
}

