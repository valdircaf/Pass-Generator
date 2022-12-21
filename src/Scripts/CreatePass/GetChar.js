
import Generator from '../../Pages/Generator/Generator';
const rand = require('../RandomNum/GenerateNum')

const lowerCase = Generator.lowerCase;

console.log(lowerCase)

const charLowerCase = ()=> String.fromCharCode(rand(97, 123));
const charUpperCase =  ()=> String.fromCharCode(rand(65, 91));
const charNumber = ()=> String.fromCharCode(rand(48, 58));
const simbols = '/-_;/]}[{!@#$%&*()'

const simbol = Array.from(simbols).join('');

function createPass(char, upperCase, lowerCase, numbers, simbols) {
    let pass = [];

    for(let i=0; i<=char; i++){
        upperCase && pass.push(charUpperCase());
        lowerCase && pass.push(charLowerCase());
        numbers && pass.push(charNumber());
        simbols && pass.push(simbol[rand(0, simbol.length)]);
    }

    console.log( pass.join('').slice(0, char));
}
