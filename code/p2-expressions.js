/*
    CIT 281 Project 2
    Anonymous Functions
    Name: Noah Bautista
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let result = "";



//returns a random letter from the alphabet
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length)];
}
console.log(getRandomLetter());

//creates a random string of letters from the alphabet
for (let i = 0; i < getRandomInteger(10, 20); i++) {
    result += getRandomLetter();

}
console.log(result);

//
const getRandomString = function(minLength, maxLength) {
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++){
        result += getRandomLetter();
    }
    return result;
}
console.log(getRandomString(10,20));

const getSortedString = function(string) {
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10, 20)));
