// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  let stringLength = string.length;
  return drivers.filter(function (letter) {
    return name.slice(0, stringLength) === name
  })
}
