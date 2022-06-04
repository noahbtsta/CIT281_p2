/*
    CIT 281 Project 2
    Name: Noah Bautista
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

//returns a random letter from the alphabet
function getRandomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)];
}

//updated for loop that creates a random string
for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}
console.log(result);

//
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++){
        result += getRandomLetter();
    }
    return result;
}

function getSortedString(string){
    return string.split('').sort().join('');

}
console.log(getSortedString(getRandomString(10, 20)));
