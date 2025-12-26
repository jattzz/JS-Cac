// Data is an object in js.

let myDate = new Date();
// console.log(myDate); // returns something not really readable
//lets try converting it to string

// console.log(myDate.toString()); // much better;
// console.log(myDate.toDateString()); //most used;
// console.log(myDate.toLocaleString()); // also returns time
// console.log(myDate.toLocaleDateString()); //this is also used very much, no time

let myNewDate = new Date(2026, 9, 14); // here month starts from 0

// console.log(myNewDate.toLocaleDateString());

let anotherDate = new Date("10-14-2026"); // here months start from 1
// console.log(anotherDate.toLocaleDateString());

let myTimeStamp = Date.now(); // returns milliseconds from 1st January 1970
console.log(myTimeStamp);

console.log(anotherDate.getTime()); // returns the time from 1st Jan 1970 to this date.

//to seconds;
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getDate());
// but for month we have to do +1


