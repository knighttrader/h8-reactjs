// FILTER

const animals = [
{name: "Fluffy", species: "cat"},
{name: "Carlo", species: "dog"},
{name: "Nemo", species: "fish"},
{name: "Hamilton", species: "dog"},
{name: "Dory", species: "fish"},
{name: "Ursa", species: "cat"}
];


// Cara Konvensional

let fish = [];

for(let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'fish') {
    fish.push(animals[i]);
  };
};

console.log('Hasil dengan cara Konvensional :', '\n');
console.log(fish);
console.log('\n');


// Menggunakan Filter

let fish1 = animals.filter(animal => animal.species === 'fish'); // Filter unt 1 baris

let fish2 = animals.filter(animal => { // Filter unt beberapa baris
	return animal.species === 'fish';
});

console.log('Hasil dengan menggunakan Filter :', '\n');
console.log(fish1);
console.log(fish2);
console.log('\n');


// MAP

let names = [];
let species = [];
for (let i=0; i<animals.length; i++) {
  names.push(animals[i].name);
};

console.log('Mengambil data dengan cara Konvensional:', '\n');
console.log(names);
console.log('\n');


// Menggunakan Map

names = animals.map((animal) => animal.name); // Map 1 baris
species = animals.map(animal => { // Map unt beberapa baris
	return animal.species;
});

console.log('Mengambil data dengan Map:', '\n');
console.log(names);
console.log(species);
console.log('\n');

// REDUCE

let orders = [
{ total: 325 },
{ total: 512},
{ total: 128},
{ total: 32 }
];

let total = 0;

// for (let i = 0; i < orders.length; i++) {
//   total += orders[i].total;
// };

total = orders.reduce((sum, order) => {
	return sum += order.total;
}, 0);

console.log(total);