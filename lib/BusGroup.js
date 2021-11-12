class BusGroup {
  constructor(passengers) {
    this.passengers = passengers;
    this.accumulator = 0;
    this.sw = 0;
    this.sizes = [];
  }

  getTravelPlan() {
    // Loop para recorrer las cantidades posibles de grupos
    for (let arrayCount = 1; arrayCount <= this.passengers.reduce((total, value) => total + value, 0); arrayCount++) {
      this.accumulator = 0;
      this.sw = 0;
      for (
        let loopCounter = 0;
        loopCounter < this.passengers.length;
        loopCounter++
      ) {
        this.accumulator += this.passengers[loopCounter];
        if (this.accumulator == arrayCount) {
          // Resetea acumulador para continuar con el siguiente item
          this.accumulator = 0;
        } else if (this.accumulator < arrayCount) {
          // Continúa acumulando
          continue;
        } else {
          // Se sale y continua el proximo
          this.sw = 1;
          loopCounter = this.passengers.length - 1;
        }
        //console.log(this.passengers[loopCounter] + " -- " + loopCounter);
      }
      // Valida si el grupo es correcto y lo agrega al resultado
      if (this.sw == 0 && this.accumulator == 0) {
        this.sizes.push(arrayCount);
      }
    }

    return this.sizes;
  }
}
module.exports = BusGroup;
