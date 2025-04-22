const text2: string = 'Peter Parker is the Spider-Man';

console.log('\nSubtraction');
console.log(text2.substring(20));
console.log(text2.slice(20));

console.log(text2.substring(20,26));
console.log(text2.slice(20,26));

console.log('\nSplit');
console.log(text2.split(' '));
console.log(text2.split('a'));

console.log('\nGet a single character');
console.log(text2.charAt(1));

console.log('\nIndex of an element');
console.log(text2.indexOf('e'));
console.log(text2.lastIndexOf('e'));

console.log('\nGet character code');
console.log(text2.charCodeAt(1));
