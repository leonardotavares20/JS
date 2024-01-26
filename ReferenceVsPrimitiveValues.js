let name = "Max";

console.log(name);

let secondName = name;

name = "Chris";

console.log(secondName);

let person = {
  age: 28,
  name: "Leonardo",
  hobbies: ["Cooking", "Films"],
};

let hobbies = [...person.hobbies];

// let secondPerson = person;
let secondPerson = { ...person, hobbies };

// console.log(secondPerson);

let thirdPerson = {
  age: 28,
  name: "Leonardo",
  hobbies: ["Cooking", "Films"],
};

person.name = "Charlie";
person.hobbies.push("Walk");

console.log(secondPerson);

console.log(thirdPerson);
