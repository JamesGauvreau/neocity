// ::Functions
// Build a machine and call it "bottleCapper".
// Mandate that the machine should take 2 inputs: bottle and cap.
// When the machine runs, it should put the bottle and the cap together.
// i.e.

function bottlecapper(bottle, cap) {
    return bottle + cap;
}
// ^ Function declaration
// Parens enclose "parameters", or slots for the inputs that the function should receive.

// + will add numbers & will concatenate strings. 

const dog = bottlecapper("green bottle", "white cap")
// ^ Function execution
// Parens enclose arguments, the specific values of JS date types given to the existing parameters.

// Besides primitives (e.g. strings, booleans), there are objects.
// Objects may be: 
// 1. standard objects
// 2. arrays
// 3. functions
// This means that 'function bottlecapper' is an object.

// defining the function

console.log(dog)
console.log(bottlecapper("green bottle", "white cap"))
// ^ the preceding are equivalent

// machine machineName(inputs_ie_rawMaterial) {
//      output_ie_product
//
// function bottlecapper(bottle, cap) {
//     return bottle + cap;
// }

// In document.querySelector, "document" represents the entire HTML document. If querySelector looks for CSS, you need to precede with # (i.e. #Button1).

// If you try to reassign a const, JS will throw an error.

// "You have repetition in the goTown and goStore functions. Repetition in your code is a sign that you need another function."

// // Objects are non primitive data types that store key-value pairs. Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol. Mutable means that the data can be changed after it is created.