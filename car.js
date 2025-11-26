/**
 * Vehicle Interface (as an object contract)
 * Properties:
 * - make: string
 * - model: string
 * - year: number
 * Methods:
 * - start(): void - logs "Engine started"
 */

/**
 * Car Class - implements the Vehicle interface
 * Constructor initializes make, model, and year
 * Implements start method to log "Car engine started"
 */
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  // Vehicle interface method
  start() {
    console.log("Car engine started")
  }
}

export default Car
// End of Car class module