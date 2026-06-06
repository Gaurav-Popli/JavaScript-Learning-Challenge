const name="gaurav"
const repoCount=8
// console.log(name+repoCount+"value");
console.log(`my name is ${name} and repo count is ${repoCount}`);//string interpolation i.e.. modern way of printing values using back-ticks(``)
const gameName=new String("Gauravbro")
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
// console.log(gameName.indexOf('G'));
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-7,4)
console.log(anotherString);

const new1="   Gaurav   "
console.log(new1);
console.log(new1.trim());

const url="https://gaurav.com/gaurav%20popli"

url.replace('%20','-')
console.log(url.replace('%20','-'));//replace a particular part

console.log(url.includes('gaurav'))
console.log(url.includes('baba'))
const game="Clash-of-Clans"
console.log(game.split('-'));
