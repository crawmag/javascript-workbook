//Length of array
let cars = ["Ford", "Honda", "Kia", "Buick"];
console.log("Length of array: ", cars.length);

//concat
let moreCars = ["Audi", "Toyota", "Chevy", "Honda"];
let totalCars = cars.concat(moreCars);
console.log("Concat 2 arrays: ", totalCars);

//index of and last index of
console.log("This is the index of Honda: ", totalCars.indexOf("Honda"));
console.log("This is the last index of Ford: ", totalCars.lastIndexOf("Ford"));
console.log(
  "This is the last index of Honda: ",
  totalCars.lastIndexOf("Honda")
);

//join
let stringOfCars = totalCars.join(", ");
console.log(stringOfCars);

//split
totalCars = stringOfCars.split(", ");
console.log("Split: ", totalCars);

//reverse
let carsInReverse = totalCars.reverse();
console.log("Reversing the array: ", carsInReverse);

//sort
carsInReverse.sort();
console.log("Sorting: ", carsInReverse);

//slice
let removedCars = carsInReverse.slice(3, 5);
console.log("Slicing: ", removedCars);

//splice
carsInReverse.splice(1, 2, "Ford", "Honda");
console.log("Splicing: ", carsInReverse);

//push
carsInReverse.push("Buick", "Chevy");
console.log("Push: ", carsInReverse);

//pop
carsInReverse.pop();
console.log("Pop: ", carsInReverse);

//shift
carsInReverse.shift();
console.log("Shift: ", carsInReverse);

//unshift
carsInReverse.unshift("BMW");
console.log("Unshift: ", carsInReverse);

//forEach
let numbers = [23, 45, 0, 2];
console.log(numbers);
numbers.forEach((item, index) => {
  numbers[index] = item + 2;
});
console.log("After the forEach is applied: ", numbers);
