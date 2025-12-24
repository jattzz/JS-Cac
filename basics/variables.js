const accountID = 133452
let accountEmail = "feroshi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // is undefined/false by default

// accountID = 12;   // const can not be changed

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity]);

accountEmail = "fer0shi@gmail.com"
accountPassword = "121212"
accountCity = "Mumbai";

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

// var and let are used to intialize variables, let is more used, var used to have scope issues, which can still be faced sometimes to this day.

// also we can initialize variables without using var or let, but its a very bad practice that should never be done

