let score = true/false

console.log(typeof score);

console.log(typeof(score));

let value_in_number = Number(score)
console.log(typeof value_in_number);
console.log(value_in_number)

/*
"121" => 121
"321abc" => NaN
true => 1; false => 0; true/false => Infinity
*/

let isLoggedIn = 6
let boolean_is_loggedIn = Boolean(isLoggedIn)
console.log(boolean_is_loggedIn);

let some_number =23 + "4"                    //23 + 4 => 27  and 23 +"4" => 234
let string_number = String(some_number)
console.log(string_number);
console.log(typeof string_number);


/******************************************** Operation **********************************************/

let value = 3
let negValue = -value
console.log(negValue)

console.log(22+33);
console.log(22-33);
console.log(22*33);
console.log(22**33);
console.log(22/33);
console.log(22%33);

let str1 = "Hello"
let str2 = " Pankaj"
let str3 = str1+str2
console.log(str3);

console.log("1" + 3 + "2");
console.log(1 + 3 + "2");



/******************************************** String **********************************************/

const name = "Pankajmourya007"
const RepoCount = 18
const gitHub = "pankajmourya007"
console.log(`My Name is ${name}, I have ${RepoCount} Public Repositories on GitHub and My GitHub ID is @${gitHub}`)

const myName = new String('Pankaj Mourya')

console.table(myName);
console.log(myName.length);
console.log(myName[0]);
console.log(myName[1]);
console.count(myName);
// console.countReset(myName);
console.myName;