/*Create a function that accepts a measurement value in inches and
returns the equivalent of the measurement value in feet.*/

function inches_to_feet(inches){
    var feet = Math.round(inches/12)
    return feet + 'ft'
}
console.log(inches_to_feet(95))
