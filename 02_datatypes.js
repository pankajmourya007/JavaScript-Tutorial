"use strict";

// alert("Pankajmourya007")

let age = 21

/*
number => 2 to the power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique

object
*/

console.log(typeof age)            //undefined
console.log(typeof null);         //object

let myCollege = "SRMU"
let anotherCollegeName = myCollege
anotherCollegeName = "BBDU"
console.log(myCollege, anotherCollegeName)
let obj = {name: 'Pankaj', age: 20}
let anotherObj = obj
anotherObj.age = 21
console.log(obj, anotherObj)
console.log(anotherCollegeName)
console.log(myCollege)



/************************************************* Heap ***************************************/

let UserOne = {
    name: "Pankaj",
    age: '21',
    email: "pankaj2k21mourya007@gmail.com",
    UPI : "UserOne@ybl",
    College : "SRMU"
}

let UserTwo = UserOne
UserTwo.email = "srdtun2@gmail.com",
console.log(UserOne.email)
console.log(UserTwo.email)
// delete UserOne.email
console.table([UserOne.email, UserTwo.UPI, UserOne.UPI, UserOne.name, UserOne.email, UserOne.age, UserTwo.email, UserOne.College, UserTwo.College])


/************************************************* String ***************************************/

const name = "Pankaj"
const RepoCount = 18
const gitHub = "pankajmourya007"
console.log(`My Name is ${name}, I have ${RepoCount} Public Repositories on GitHub and My GitHub ID is @${gitHub}`)
console.log(`Name Length ${name.length}`)
console.log(`UpperCase ${name.toUpperCase()}`)
console.log(`LowerCase ${name.toLowerCase()}`)
console.log(name.substring(0, 3))
console.log(name.substring(0, 3).toUpperCase())
console.log(name.split(""))
// console.log(name.split("a"))
// console.log(name.split("n"))
// console.log(name.split("k"))
// console.log(name.split("j"))
// console.log(name.split("P"))
// console.log(name.split("P")[0])
// console.log(name.split("P")[1])
// console.log(name.split("P")[2])
// console.log(name.split("P")[3])
// console.log(name.split("P")[4])
// console.log(name.split("P")[5])


// Primitive Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
// Objects are reference types
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. Error
// 6. RegExp
// 7. Map, WeakMap
// 8. Set, WeakSet
// 9. JSON
// 10. Math
// 11. Promise
// 12. Proxy
// 13. Reflect
// 14. ArrayBuffer, SharedArrayBuffer
// 15. Atomics
// 16. DataView
// 17. Generator
// 18. GeneratorFunction
// 19. AsyncFunction
// 20. Iterator
// 21. AsyncIterator
// 22. Intl.Collator
// 23. Intl.DateTimeFormat
// 24. Intl.NumberFormat
// 25. Intl.PluralRules
// 26. Intl.RelativeTimeFormat
// 27. Intl.Locale
// 28. Intl.Locale.prototype
// 29. Intl.DisplayNames
// 30. Intl.ListFormat
// 31. Intl.NumberFormat
// 32. Intl.DateTimeFormat
// 33. Intl.RelativeTimeFormat
// 34. Intl.Collator
// 35. Intl.PluralRules
// 36. Intl.Segmenter
// 37. Intl.Segmenter.prototype
// 38. Intl.Segment
// 39. Intl.Segment.prototype
// 40. Intl.Segmenter.prototype.resolvedOptions
// 41. Intl.Segment.prototype.breakIterator
// 42. Intl.Segment.prototype.segment
// 43. Intl.Segment.prototype.isWord
// 44. Intl.Segment.prototype.isNumber
// 45. Intl.Segment.prototype.isSentenceStart
// 46. Intl.Segment.prototype.isSentenceEnd
// 47. Intl.Segment.prototype.isOther
// 48. Intl.Segment.prototype.breakType
// 49. Intl.Segment.prototype.toString
// 50. Intl.Segment.prototype.toJSON
