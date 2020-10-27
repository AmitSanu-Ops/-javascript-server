// The object class represents one of JavaScript's data types. It is used to
//store various keyed collections and more complex entities.
//Object can be created using the Object() constructor or the object initializer / literal syntax.

// Nearly all objects in javaScript are instances of Object 
//a typical object inherits properties (including methods) from Object.prototype, although these properties
// may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), 
//or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

// Creating a new Object
let o = new Object()
let k = new Object(undefined)
let l = new Object(null)
o.fun = 42


console.log(o)


// Object.assign() method copies all enumerable own properties
// suppose we have two array target and source then all the element in
// source will assigned in target
const target ={a:1, b:2}   //what to apply the sources’ properties to, which is returned after it is modified.
const source = {b:45, c:5, a:30};  //The source object(s) — objects containing the properties you want to apply.
const returnedTarget = Object.assign(target,source);
console.log(target);
console.log(returnedTarget);

// we can clone an object also using object.assign()
//Note : - For deep cloning, we need to use alternatives, because Object.assign() copies property values.
//         If the source value is a reference to an object, it only copies the reference value.
const obj = { a: 1555 };
const copy = Object.assign({}, obj);
console.log(copy); 

// Merging object
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obje = Object.assign(o2, o1, o3); 
console.log(obje); 
console.log(o1);// all assigned in o1 when const obje = Object.assign(o1, o2, o3);
console.log(o2);// Now assigned  in o2

// Primitives will be wrapped to objects
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj1 = Object.assign({}, v1, null, v2, undefined, v3, v4); 
console.log(obj1); 

// we can intrrupt the ongoing copying task is object.assign()
const target1 = Object.defineProperty({}, 'foo', {
    value: 1,
    writable: false
  }); // target.foo is a read-only property
  
  Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });

  console.log(target.bar);  
  console.log(target.foo2);
  console.log(target.foo);  
  console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
  console.log(target.baz);


  // Object.create
  //The Object.create() method creates a new object, using an existing 
  //  object as the prototype of the newly created object.
  const emp = {
    isfresher: false,
    printIntro: function() {
      console.log(`My name is ${this.name}. Am I fresher? ${this.isfresher}`);
    }
  };
  
  const me = Object.create(emp);
  
  me.name = 'AmitSanu'; // "name" is a property set on "me", but not on "emp"
  me.isfresher = true; // inherited properties can be overwritten
  
  me.printIntro();
  
                //Object.defineProperty()
  //The static method Object.defineProperty() defines a new property directly on an object, 
  //or modifies an existing property on an object, and returns the object.
  const object3 = {};

  Object.defineProperty(object3, 'property1', {
    value: 88,
    writable: false,
    configurable: true,
    enumerable: true
  });
  
  object3.property1 = 77;
  // throws an error in strict mode
  
  console.log(object3.property1);

//Object.defineProperties()
//The Object.defineProperties() method defines new or modifies existing 
//properties directly on an object, returning the object.


let obj5 = {};
Object.defineProperties(obj5, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});
console.log(obj5.property2);

//Object.entries()
//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
// in the same order as that provided by a for...in loop.
const obj6 = {
    a: 'xajxajk',
    b: 5555
  };
  
  for (const [key, value] of Object.entries(obj6)) {
    console.log(`${key}: ${value}`);
  }
  
 // Object.freeze()
/*A frozen object can no longer be changed. Freezing an object prevents:

New properties from being added to the object.
Existing properties to be removed from the object.
Changing the enumerability, configurability, or writability of existing properties.
Changing values of the existing object properties and prototype.*/

let obj7 = {
    prop: function () {},
    foo: "bar",
  };
  
  let op = Object.freeze(obj7);
  
  console.log(op == obj7); // True -> Returns the same object
  console.log(Object.isFrozen(obj7)); // true
  
  // changes will fail 
  obj7.foo = "bar1";
  console.log(obj7.foo); // bar will print 
  
  // does not add 
  obj7.new_foo = "bar";
  console.log(obj7.new_foo);

  // Object.fromEntries()
  //The Object.fromEntries() method transforms a list of key-value pairs into an object.
  const entries = new Map([
    ['fodkwko', 'jkccskjr'],
    ['bmaz', 55]
  ]);
  
  const obj8 = Object.fromEntries(entries);
  
  console.log(obj8);

  //Object.getOwnPropertyDescriptor()


  let obj9 = {
    x: 10,
    get number() {
      return this.x;
    },
  };
  
  let xValue = Object.getOwnPropertyDescriptor(obj9, "x");
  console.log(xValue);
  
  let value = Object.getOwnPropertyDescriptor(obj9, "number");
  console.log(value);
  
  Object.defineProperty(obj9, "name", {
    value: "FAPPPPPPP",
    writable: false,
    enumerable: false,
  });
  
  console.log(Object.getOwnPropertyDescriptor(obj9, "name"));
  