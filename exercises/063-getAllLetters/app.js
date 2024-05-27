function getAllLetters(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++){
        newStr.push(str[i]);
            
    }
    return newStr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
