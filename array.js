//       ____________________________   Array  _________________________

// Array :
//        Array is like a data structure , nd we use array whenever we want to create nd store
//        a list of multiple items in single variable.
//        Array store a multiple type of datatype value like string,number,boolean etc.
//        Array value can be access by their numerical position (indexing) in the list.
//        Array indexing starts from [0] .
//        Array datatypes is object .

//

// Let create an array.
let array = ["Aniket", "Thakur", 22, "Sehore", true];
console.log(array); // Print an all array value in console.

console.log(array.length); // Length method is used to get the length of array.
//                         // Length start from 1 nd always one is greater than indexing numbr.
//                         // like here index is 4 but length is 5.

console.log(array[0]);
console.log(array[1]);
console.log(array[2]); // get separate value of array by their index number.
console.log(array[3]);
console.log(array[4]);

// Their is two method for add or remove a last value in array .
// 1.push() method is used to add a new value in tail of array .
// 2.pop() method is used to delete a tail value in array .

array.push("Bhaiya");
console.log("push", array); // add a new value in tail of array .

array.pop();
console.log("pop", array); // delete a tail value in array .

// Their is two method for add or remove a first value in array .
// 1.shift() method is used to add a new value in starting of array .
// 2.unshift() method is used to delete a starting value in array .

array.shift();
console.log("shift", array); // delete a starting value of array .

array.unshift("My name is");
console.log("unshift", array); // add a new value starting in array .

// Add a new value in array anywhere .
array[7] = "Unmarried";
console.log(array); // now length is 8 nd the rest value index will empty.

array[1] = "Singh";
console.log(array); // now length wll same 8 but it override the index 1 value.

//  Remove a value in array
delete array[1];
console.log(array); // length will same but index value is empty.

array[1] = "Thakur";
console.log(array); // length will same but index value override the empty value.

// Their is another way to print all aray value in sort nd easy way by using loop .
// Loop is used to ittrate a each nd every value of array .

for (let i = 0; i < array.length; i++) {
  console.log("loop :", array[i]);
}

// Nested array .
let arr = [1, 2, 3, 4, [5, 6, 7]];
console.log("@AT", arr[4][1]); // get nested array value .
