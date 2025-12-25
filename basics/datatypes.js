"use strict"; // treats all js code as newer version

// old versions used to not have classes, modules etc

// alert(3 + 3); // not usable on node js, usable on browser js

// console.log(3 + 3);


// js has 2 mainstream documentation, mdn and ecma, mdn is more ui friendly as it is newer, but ecma is the original documentation that mdn is dervied from.

// ecma standards are very well regarded in the industry, but is mainly for browser js, rather than for js; and its javascript documentation is referred to as tc39.es, mdn is the go-to documentation tho.

let name = "fer0shi";
let age = 22;
let isLoggedIn = true;
let state = null;

// number;
// BigInt;
// string = "";
// boolean = true/false;
// null => is also a type, but is also a standalone value
// undefined; is different from null because null can be asigned whilst undefined can not be assigned manually, its the default value for intialized without value variables.
// symbol => unique (will be used mainly whilst working with react)

// object => custom dataType

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// 7 data types and their return types
// number => number
// boolean => boolean
// string => string
// null => object
// function => function / object function
// symbol => symbol
// bigInt => bigint
// undefined => undefined

// non primitive types; array, object, functions;

// stack & memory
// primitive data types uses stack
// non primitive uses heap

// when anything is stored in stack, we can only access its copies, whereas elements stored in heap gets their reference shared for accessing.

let userName = "feroshi";
let anotherUserName = userName;
anotherUserName = "fer0shi";
console.log(userName, anotherUserName); // no changes in original copy

let user = {
    userName: "feroshi",
    email: "feroshi@gmail.com"
};

let userTwo = user;

userTwo.userName = "fer0shi";

console.log(user.userName, userTwo.userName);
// changes both, since object is shared by reference; same for function, and same for array.

