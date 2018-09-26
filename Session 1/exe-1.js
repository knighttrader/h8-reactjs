// Deklarasi Variable dengan let

console.log('\n');

let playerName = 'Budi';
console.log('playerName = ' + playerName);

playerName = `Andy`;
console.log(`playerName = ` + playerName);

console.log('\n');

// Deklarasi Varible dengan const

const pi = 3.14;
console.log("pi = " + pi);

console.log('\n');

// Tipe Data Number

let weight = 75;
weight = weight + 15;
console.log('weight + 15 = ' + weight);

let originalNum = 23;
let newNum = originalNum + 7;
console.log(newNum);

let numberToBeAdded = 7;
newNum = originalNum + numberToBeAdded;
console.log(newNum);

console.log('\n');

// Tipe Data String

let message = 'Welcome!';
console.log(message);
message = 'Bye, bye';
console.log(message);

message = "She’s a great person";
console.log(message);
message = 'She\'s a great person';
console.log(message);

let htmlSnippet = '<h1 class="header">This is a header</h1>';
console.log(htmlSnippet);
htmlSnippet = "<h1 class=\"header\">This is a header</h1>";
console.log(htmlSnippet);


// Teknik Manipulasi String

let visitor1 = 'Andy';
let message1 = '\nHalo ' + visitor1;
console.log(message1);

let visitor2 = "Dominic";
let message2 = '\nHalo ' + visitor2 + '. Selamat datang di kelas Modern JavaScript! \n' + 'Kita senang sekali kamu mau datang berkunjung, ' + visitor2 + '.\n' + 'Semoga kamu berkenan datang kembali untuk belajar bersama.';
console.log(message2);

let visitor3 = 'Vannessa';
let message3 = '\nHalo ' + visitor3;
message3 = message3 + '. Selamat datang di kelas Modern JavaScript! \n';
message3 += 'Kita senang sekali kamu mau datang berkunjung, ';
message3 += visitor3 + '.\n' + 'Semoga kamu berkenan datang kembali untuk belajar bersama. \n';
console.log(message3);


// Tipe Data Boolean

let isRaining = true;
let isFinished = true;
let menuOpen = "true";
console.log(isRaining);
console.log(typeof isRaining);
console.log(isFinished);
console.log(typeof isFinished);
console.log(menuOpen);
console.log(typeof menuOpen);
