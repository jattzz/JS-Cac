// let myArr = [0, 1, 2, 3, 4, 5];
// // console.log(myArr[1]);

// // whenever we try to copy a arr, it creates and passes a shallow copy, which basically means that they have the same references (have a shared access);

// // deep copy of an object do not share the same references;

// // its like, its called shallow because when we tried to copy it the engine basically said, im not goona each element here's the direct reference; however in deep copy, we get an entire editable copy (changes will not result in any changes int the orginal copy);

// const myHeroes = ['jattzz', 'feroshi'];

// const tempArr = new Array(1, 2, 3, 4);
// // console.log(tempArr[2]);

// // Methods;

// // push(x) -> same as vector push_back
// // pop() -> same as vector pop
// // unshift(x) -> not really advised to use, its like push_front, but takes O(n) time to insert an element;
// // shift() -> works in O(1), its like pop_front();
// // most used methods; 
//     // myArr.includes(x) -> checks whether x exists
//     // myArr.indexOf(x) -> returns the index of first occurence of x

// // we also have join() in js, which basically stringifies an arr.

// const stringArr = tempArr.join();

// // typeof(stringArr) -> string

// // we also have slice and splice method;
// // in splice method, the specified range is removed from the original array and returned to you; (hence, not used much);

// const arr1 = [0, 1, 2, 3, 4, 5];
// console.log("A", arr1);

// const arr2 = arr1.slice(1, 3); // (starting idx, ending idx(not printed));

// console.log("B", arr2);

// const arr3 = arr1.splice(1, 3); // (starting idx, ending idx(printed));

// console.log("C", arr3);

// console.log(arr1); // original array manipulated




// // ****************** More arrays ***********************

// const marvelHeroes = ["ironman", "thor", "spiderman"];
// const dcHeroes = ["superman", "flash", "batman"];

// // if we use marvelHeroes.push(dcHeroes), instead of unifying the 2 arrays, it will instead push dcHeroes as an element inside the marvelHeroes. ["ironman", "thor", "spiderman", ["superman", "flash", "batman"]]; this will be the resultant array (4 elements);

// // instead what we use is concat method;

// // marvelHeroes.concat(dcHeroes);
// // console.log(marvelHeroes); // does not return what we want, reason being, concat method returns a vector, and as we can see we are not storing that returned vector anywhere.

// let union = marvelHeroes.concat(dcHeroes);
// console.log(union);

// // another method is spread, it basically splits an array into atomic values.
 
// const unionInAWay = [...marvelHeroes, ...dcHeroes];

// console.log(unionInAWay);
// // in projects, spread operator is used more as it allows concatenation of numerous arrays at once, rather than doing them one by one in concat().

// // we might come across scenarios where we unintentionally have an array inside an array, and to streamline them into a single array, we use flat() method;

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// const flatArr = marvelHeroes.flat(Infinity);
// // parameter is depth, we use infinity to streamline all elements into 1 array

// console.log(flatArr);

// console.log(Array.isArray("feroshi"));

// console.log(Array.from("feroshi"));

// // we can also make an array from an object but we have to specify first which attributes of the object will be used.

// console.log(Array.from({name: "feroshi"})); // will return empty array because we didn't specify

// let score1 = 10, score2 = 20, score3 = 30;

// console.log(Array.of(score1, score2, score3)); 
// // returns an array comprised of those 3 values.



// let arr = new Array([1, 2, 3, 4, 5]);

// let arr2 = new Array([5, 4, 3, 2, 1]);

// console.log(JSON.stringify(arr2.reverse()) == JSON.stringify(arr2));


// again nakli commit