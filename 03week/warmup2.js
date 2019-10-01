//Print numbers 1 to 50
//1. divisible by 3, print fizz
//2. divisible by 5, print buzz
//3. divisible by 3 and 5, print fizzbuzz
//4. if not divisible by 3 0r 5 print number
for (var i = 1; i <= 50; i++) {
  if (i % 15 == 0) {
    console.log(i, "fizzbuzz");
  } else if (i % 3 == 0) {
    console.log(i, "fizz");
  } else if (i % 5 == 0) {
    console.log(i, "buzz");
  } else {
    console.log(i);
  }
}
