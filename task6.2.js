class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
        this.surgeMultiplier = surgeMultiplier;
    }

    // Calculate the total fare
    calculateFare(distanceInMiles, timeInMinutes) {
        return (this.baseFare + (this.costPerMile * distanceInMiles) + (this.costPerMinute * timeInMinutes) + this.bookingFee) * this.surgeMultiplier;
    }
}

const uberCalculator = new UberPriceCalculator(12.50, 11.75, 0.25, 1.00, 1.5); 
const fare = uberCalculator.calculateFare(10, 20); 
console.log('Total Fare: $' + fare.toFixed(2));
