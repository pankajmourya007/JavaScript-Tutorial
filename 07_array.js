
// const myAr = [2,3,0,1,5,23]
// console.log(myAr);
// console.log(myAr[0]);

// const myAr2 = new Array(5,3,6,8,3)
// console.log(myAr2);


// myAr.push(10)
// myAr[0] = 100
 
// myAr.pop()
// myAr.pop()
// myAr.pop()
// myAr.pop()
// myAr.unshift(10)
// myAr.shift()
// console.log(myAr.includes(30))
// console.log(myAr.indexOf(3))

// const newAr = myAr.join()

// console.log(myAr);

// console.log(newAr);
// console.log(typeof(newAr));

// console.log("A", myAr)
// const myA1 = myAr.slice(1,3)

// console.log(myA1);
// console.log("B", myAr);

// const myA2 = myAr.splice(1,3)
// console.log("C", myAr);
// console.log(myA1);
// console.log(myA2);

const Arr1 = ['aa','bb','cc','dd']
const Arr2 = ['ee','ff','gg','hh']

const newArr = Arr1.concat(Arr2)
console.log(newArr);

const newArr2 = [...Arr1, ...Arr2]
console.log(newArr2);