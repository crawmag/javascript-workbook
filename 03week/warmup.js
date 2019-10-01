//Write a loop that
//A. Prints out every number between 1 and 100
//this is a for loop
for (let i=1, i<=10, i++) {
    console.log(i);
}
//this is a while loop
var i = 1;
while(i<=100){
    console.log(i);
    i++;
}
//this is a do while loop
var i = 1;
do{
    console.log(i);
    i++;
}while(i<=100);

//B. Prints only the even numbers between 1 and 100
for (let i=2, i<=100, i+=2){
    console.log(i);
}

//in this instance we look at every number and check to see if it has a modulo of 2
for(let i=1, i<=100, i++){
    if(i % 2 == 0){
        console.log("even", i);
    }else{
        console.log("odd", i);
    }
}

//What is the sum of all the numbers of 1 to 100
var sum = 0;
var num = 1;

while(num<=100){
    sum = sum+num;
    num = num + 1;
}
console.log(sum);

//with a for loop
var sum = 0;
for(let i=1, i<=100, i++){
    sum = sum +i;
}

console.log(sum);