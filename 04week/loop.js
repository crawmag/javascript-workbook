//do..while loop
let i = 0;
do {
  i++;
  console.log(i);
} while (i <= 1000);

//object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "Female"
};

//for loop
for (prop in person) {
  if (prop === "birthDate") {
    let birthday = person.birthDate.split(", ")[1];
    if (parseInt(birthday) % 2 !== 0) {
      console.log(person.birthDate);
    }
  }
}

//arrayof persons

let arrayOfPersons = [
  {
    firstName: "John",
    lastName: "Smith",
    birthDate: "Jan 6, 1925",
    gender: "Male"
  },
  {
    firstName: "Jackie",
    lastName: "Donald",
    birthDate: "Jan 17, 1999",
    gender: "Female"
  },
  {
    firstName: "Jack",
    lastName: "Doogle",
    birthDate: "Jan 9, 2000",
    gender: "Male"
  }
];

//map
const information = arrayOfPersons.map(_person => {
  for (prop in _person) {
    console.log(prop + ":", _person[prop]);
  }
});

//filter all males
const males = arrayOfPersons.filter(prop => {
  if (prop.gender === "Male") {
    return prop;
  }
});

console.log("males:", males);

//filter after jan 1 1990
const young = arrayOfPersons.filter(prop => {
  if (parseInt(prop.birthDate.split(", ")[1]) >= 1990) {
    return prop;
  }
});

console.log("After 1990:", young);
