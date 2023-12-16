/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[key] = typeof obj[key] === 'string' ? obj[key].trim() : obj[key];
    return newObj;
  }, {});
}


/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      obj[key] = obj[key].trim();
    }
  });
  return obj;
}


/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  return Math.max(...integers.map(obj => obj.integer));
}


class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  countDown() {
    return this.count > 0 ? this.count-- : 0;
  }
}

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.index = 0;
  }

  next() {
    const season = this.seasons[this.index % this.seasons.length];
    this.index++;
    return season;
  }
}


class Car {
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.tankSize = tankSize; // Total capacity of the gas tank in gallons
    this.mpg = mpg; // Miles per gallon
    this.odometer = 0; // Total miles driven
    this.tank = tankSize; // Current gas in the tank (gallons)
  }
  get fuel() {
    return this.tank; // Returning the current fuel level from the tank property
  }

  drive(distance) {
    const maxDistance = this.tank * this.mpg; // Maximum distance the car can go with the current gas
    const actualDistance = Math.min(distance, maxDistance); // Actual distance driven

    this.odometer += actualDistance; // Update the odometer
    this.tank -= actualDistance / this.mpg; // Reduce the gas in the tank

    return this.odometer; // Return the updated odometer
  }


  refuel(gallons) {
    const gasNeeded = this.tankSize - this.tank; // Gas needed to fill the tank
    const gasToRefuel = Math.min(gallons, gasNeeded); // Actual gas to refuel

    this.tank += gasToRefuel; // Refuel the tank

    return this.tank * this.mpg; // Return the total miles that can be driven after refueling
  }
}



/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
