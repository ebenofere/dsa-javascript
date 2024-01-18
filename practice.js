function XO(str){
    str = str.toLowerCase();

    let countX = 0;
    let countO = 0;

    for (let char of str) {
        if(char === 'x') {
            countX++;
        } else if (char === 'o') {
            countO++;
        }
    }

    return countX === countO;
}

console.log(XO("xxoo"));

// Examples input/output:
XO("ooxx") // => true
XO("xooxx") // => false
XO("ooxXm") // => true
XO("zpzpzpp") // => true // when no 'x' and 'o' is present should return true
XO("zzoo") // => false