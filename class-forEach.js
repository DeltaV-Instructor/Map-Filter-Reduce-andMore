let myArray = ['a','b','c'];

// myArray.forEach(....)

myArray.forEach(function(value, index){
console.log(index);
console.log(value);
})



let people = ['John','Cathy', 'Allie', 'Zach'];

// For loops let us "break" away given a condition
for(let i = 0; i <= people.length-1; i++){
if(i === 2){
  break;
}
console.log('people at i ', people[i]);
}

// For loops let us "continue" (skip over an iteration) given a condition

for(let i = 0; i <= people.length-1; i++){
if(i === 2){
  continue;
}
console.log('continue people at i ', people[i]);
}
// In a function, you can return from a for loop...

function findIt(array, pos=0){
  for(let i = 0; i <= array.length - 1; i++){
    if(i === pos){
      return array[i];
    }
  }
}
console.log('this is the for loop return ',findIt(people, 3));

// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
// It cannot "break", "continue" or "return"


people.forEach( function( item, index){
console.log(item);
console.log(index);
})

// ... or as an arrow function ...


people.forEach( (item, index) => {
  console.log('arrow function',item);
console.log('arrow function',index);
})


// do it as a named function.

let processor = (item, index) => { console.log('named function',item);
}

people.forEach(processor);



//arrow functions and interpolated strings. 
//expressioned bodied functions 
let f1 = () => 'hi';
console.log('f1',f1);

let f2 = (name) => `hi, ${name}`;
let e2 = function(name){
  return `hi ${name}`;
}

let a = 10;
let b = 10;
let add = (a,b) => a + b;
console.log('add ',add(a,b));

let abs = a => Math.abs(a);
let abs2 = a => {
  let results = Math.abs(a);
  return results;
}





