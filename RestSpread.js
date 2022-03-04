//refractor the below to include rest
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

let filterOutOdds = (...args) =>{
    return args.filters.filter(function(num) {
        return num % 2 === 0
    });
}

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.


let findMin = (...nums) => {
   return nums.reduce((n, g) => n > g ? g : n) 
}


//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let mergeObjects = (obj1, obj2) =>{
    return [...obj1, ...obj2]
}

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) =>{
    return [...arr, ...args.map(v => v *2)]
}

