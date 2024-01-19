 function XO(str) {
    // set incoming parameter to lowercase
    str = str.toLowerCase();
    countX = 0;
    countO = 0;

    // for loop
    for (let item of str) {
        if (item === "x") {
            countX++;
        } else if (item === "o") {
            countO++;
        }
    }

    return countX == countO;
 } 

 console.log(XO("xxow"));


// Examples input/output:
XO("ooxx") // => true
XO("xooxx") // => false
XO("ooxXm") // => true
XO("zpzpzpp") // => true // when no 'x' and 'o' is present should return true
XO("zzoo") // => false