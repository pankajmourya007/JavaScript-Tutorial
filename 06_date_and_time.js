/****************************** Date ************************************/

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof  myDate);

// let myCreatedDate = new Date (2024,0,1)
let myCreatedDate = new Date (2024,0,1,5,10);
console.log(myCreatedDate.toLocaleString());