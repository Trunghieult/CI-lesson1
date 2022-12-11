// 1: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); 

console.log( arr ); 

// 2: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let x = arr[i];
  
      if (x < a || x > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 

console.log( arr ); 

// 3. We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    return arr.slice().sort();
}
  
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );

// 4: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names );

// 5. You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  let users = [john, pete, mary];
  function arrFullname(arr) {
    let result = [];
    for (i = 0; i < arr.length; i += 1) {
      result[i] = {
        fullName: `${arr[i].name} ${arr[i].surname}`,
        id: `${arr[i].id}`,
      };
    }
    return result;
  }
  //
  // usersMapped = [
  //   { fullName: "John Smith", id: 1 },
  //   { fullName: "Pete Hunt", id: 2 },
  //   { fullName: "Mary Key", id: 3 }
  // ]
  //
  let usersMapped = arrFullname(users);
  console.log(usersMapped[0].id);
  console.log(usersMapped[0].fullName);

  //6. Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

  function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);

  // now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

//7. Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//Multiple runs of shuffle may lead to different orders of elements.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

//8. Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
//The formula for the average is (age1 + age2 + ... + ageN) / N.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];

function getAverageAge(array) {
  let sum = 0;
  array.forEach((item) => {
    sum += item.age;
  });
  return sum / array.length;
}
console.log(getAverageAge(arr)); 

//9. Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.


//10. Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// Assignment

//1. We have an object:
  let user = {
    name: "John",
    years: 30,
  };
  // Write the destructuring assignment that reads:
  // name property into the variable name.
  // years property into the variable age.
  // isAdmin property into the variable isAdmin (false, if no such property)
  let { name: name, years: age, isAdmin: isAdmin = false } = user;
  console.log(name); 
  console.log(age); 
  console.log(isAdmin); 

  //2: There is a salaries object:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

