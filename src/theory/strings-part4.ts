const text3: string = 'Peter Parker is the Spider-Man';

console.log(text3.includes('Spider'));
console.log(text3.includes('spider'));
console.log(text3.search(/spider/gi));

console.log('\nExample on how to use');
const spiderStart: number =text3.search(/spider/gi);
const spiderText: string ='Spider-Man';
const spiderStop: number = spiderStart + spiderText.length;

console.log(text3.substring(spiderStart, spiderStop));
console.log(`${spiderText} starts at ${spiderStart.toString()} character and ends at ${spiderStop.toString()} character`,);