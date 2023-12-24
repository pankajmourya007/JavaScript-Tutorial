// /************************************************ Function Declaration ***********************************/
function rty(name){
    console.log("Hello "+ name + "!");
}

rty("Pankaj");

// /************************************************ Function Expression ***********************************/
const abc = function(name){
    console.log("Hello, "+ name + "!");
}
abc("Pankaj");

// /************************************************ Arrow Function ***********************************/
const qwe = (name) => {
    console.log("Hello, "+ name + "!");
}
qwe("Pankaj");

/************************************************  Objects ************************************************************/
let me ={
    name:"Pankaj",
    age: 21,
    city: "Maswasi",
    gender: "male",
    iop:function(){
        console.log(`Hello, my name is ${this.name}, my age is ${this.age}, and my gender is ${this.gender}, and I'm from ${this.city}.`);
    }
};

console.log(me.name);
console.log(me.age);
me.iop()

/********************************************* Constructor Function **************************************************/
function m(name,age) {
    this.name = name;
    this.age = age;
    this.xyz = function() {
        console.log(`Hello, my name is ${name}.`);
    };
}
let mee = new m("Pankaj", 22);
let myFriend = new m("Jatin", 21);

console.log(mee.name);
console.log(myFriend.name);
myFriend.xyz()
mee.xyz()