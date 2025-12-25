const Name = "feroshi";
const repoCount = 50;

// console.log(Name + " has " + repoCount + " repositories");
// very outdated practice, always avoid writing like this

// instead we use placeholders
// console.log(`${Name} has ${repoCount} repositories`);
// this is called string interpolation

// just like java, we can use new keyword to create new objects of a class
let newUser = new String('feroshi');
// console.log(newUser);

// the methods that we just saw in the console section of browser, can also be accessed in here by using double underscore proto double underscore.

// console.log(newUser.__proto__);
// suppose we want to use some functions, we dont always have to use proto; we can also just directly use dot ('.') function... eg:

console.log(newUser.toUpperCase());

console.log(newUser.charAt(2));

console.log(newUser.indexOf('o'));

newUser = "feroshi-jattzz";

console.log(newUser.substring(3, 8));
// if we pass first parameter as negative, it will reject it and take it as 0; the second parameter is not length, its actually the index where substring stops

console.log(newUser);

const anotherString = newUser.slice(-12, 7);
// can pass first parameter as negative, it will just start from the end, (-8, 4) will return empty string because 14 is the length of our string and 14 - 8 is 6, so 6 to 4 can not be sliced; again the 2nd parameter is terminator rather than length specifier

console.log(anotherString);

const newStringOne = "     feroshi    ";
// lot of spaces, but we dont want them, trim method gets rid of them;

console.log(newStringOne);
console.log(newStringOne.trim());

// trimStart and trimEnd are also some methods apparently.

//since a url does not support space, any space is replaced by %20 in urls.

const url = "feroshi.com/feroshi%20jattzz";

console.log(url.replace('%20', '-'));

const temp = new String('jattzz feroshi fer0shi jatin')

console.log(temp.split(' ')); // returns an array split on the basis of the specified character(space in this case);

console.log(temp.split(temp[10])); // split on the basis of a specified character from the string itself

console.log(temp.split(' ', 2)); // will only return 2 elements split by the specified character


