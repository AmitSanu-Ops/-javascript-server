// In javascript array can have heterogenous type of elements as oin the data type

//Create array
let fruit=['apple','banana']
console.log(fruit.length)

// how to access an Array using index position
let first = fruit[0]
console.log(first)

let last = fruit[fruit.length - 1]
console.log(last)

// Loop over an Array
fruit.forEach(function(item, index, array){
    console.log(item,index)
    console.log(item,index, array)
})
//console.log(item,index, array)

// Add an item to the end of an Array
// here we use both way adding, replacing and removing item at the end and front of array
// i.e Mutating method and Non Mutating method
/*JavaScript offers several ways to add, remove, and replace items in an array
 – but some of these ways mutate the array, and others are non-mutating;
  they produce a new array.*/

  // Add Mutating
  let mutatingAdd = ['a','b','c','d']
  console.log(mutatingAdd);
  mutatingAdd.push('f');  //array.push() adds an item to the end of the array
  console.log(mutatingAdd);
  mutatingAdd.unshift('z'); // array.unshift() adds an item to the beginning of the array.
  console.log(mutatingAdd);


  // Remove Mutating
  let mutatingRemove=['1', '2', 'c', 'd', 'e'];
  mutatingRemove.pop(0,3); // remove from end
  mutatingRemove.shift();// remove from front
  console.log(mutatingRemove);
  
  let mutatingRemove1=['1', 'k', 'ckk', 'djjjh', 'ejj'];
  mutatingRemove1.splice(2,1,'Hello')
  console.log(mutatingRemove1)
  mutatingRemove1.splice(0,2);
  mutatingRemove1.splice(1);
  console.log(mutatingRemove1)
  
// Add Non-Mutating
// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.concat('f'); // ['a', 'b', 'c', 'd', 'e'. 'f']
console.log(arr1); // ['a', 'b', 'c', 'd', 'e']
console.log(arr2);

const arr7 = ['a','ksskj','sncns','ncsnn'];
const arr8 = arr7.filter(a=>a!=='ncsnn');
console.log(arr8);
const arr9=arr7.filter(a=>{
    return a!=='ncsnn';
})
console.log(arr9)


// Replace the item using array.map
const arr10 = ['fs','ada','5454','s4s']
const arr11 = arr10.map(item=>{
    if(item==='5454'){
        item='CAT';
    }
    return item;
});
console.log(arr11);

// Transforming the data using array.map

const arr12 = ['a','b','c','d','e'];
const transform_arr12 = arr12.map(n=>n+ 'Hi');
console.log(transform_arr12);

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz');
console.log(myArray);