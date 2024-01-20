// const XO = (str) => {
//     return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
// }

// // Examples input/output:
// console.log(XO("ooxx")); // => true
// console.log(XO("xooxx")); // => false
// console.log(XO("ooxXm")); // => true
// console.log(XO("zpzpzpp")); // => true // when no 'x' and 'o' is present should return true
// console.log(XO("zzoo")); // => false


function divisors(integer) {
    let r = []
    for(let i = 2; i<integer; i++){
      if(integer%i == 0) r.push(i)
    }
    let res = r.length !== 0 ? r : `${integer} is prime`
    return res
}

console.log(divisors(12));
console.log(divisors(13));
console.log(divisors(85));
console.log(divisors(60));