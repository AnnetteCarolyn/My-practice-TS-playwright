let text1: string = 'Peter Parker is the Spider-Man';

console.log('\nLower case');
console.log(text1.toLowerCase());

console.log('Lower case');


console.log('\nUpper case');
console.log(text1.toUpperCase());

console.log('\nReplace');
console.log(text1.replace('Peter Parker', 'Miles Morales'));

console.log('\nReplace All');
console.log(text1.replaceAll('a', 'A'));
console.log(text1.replaceAll(' ', '_'));
console.log(text1.replaceAll('P', ' '));

console.log('\nLength');
console.log(text1.length);

console.log('\nPad');
console.log(`>${text1}<`);

text1 = text1.padStart(text1.length + 1, ' ');
console.log(`>${text1}<`);

text1 = text1.padEnd(text1.length + 1, ' ');
console.log(`>${text1}<`);

console.log('\nTrim');
console.log(`>${text1.trimStart()}<`);
console.log(`>${text1.trimEnd()}<`);
console.log(`>${text1.trim()}<`);