//Example1
let x = 4
var mySqrt = function(x) {
    if(x < 2) return x;
    
    for(let k=2; k <= x; k++) {
        if(k * k === x) {
            return k - k % 1
        }else if((k * k) > x) {
            return k - 1 - k % 1
        }
    }
};
console.log(mySqrt(x))


// Example2
// let x = 8
// var mySqrt = function(x) {
//     if(x < 2) return x;
    
//     for(let k=2; k <= x; k++) {
//         if(k * k === x) {
//             return k - k % 1
//         }else if((k * k) > x) {
//             return k - 1 - k % 1
//         }
//     }
// };
// console.log(mySqrt(x))
