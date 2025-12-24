let score = "123";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

console.log(valueInNumber); // wil give NaN (not a number);

// "33" => 33;
// "33abc" => NaN;
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false; "abc" = true;

// *************** OPERATIONS *****************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "hello "
let str2 = "feroshi"
let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

// basically this is all according to the operation precedence in js, whilst trying to add up different type value, string is the most prefered data type for the res.