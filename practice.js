const XO = (str) => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length == str.filter(x => x === 'o').length;
}

console.log(XO("xxoo"));


// Examples input/output:
XO("ooxx") // => true
XO("xooxx") // => false
XO("ooxXm") // => true
XO("zpzpzpp") // => true // when no 'x' and 'o' is present should return true
XO("zzoo") // => false