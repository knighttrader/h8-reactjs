data = [
	{
		name: 'Super',
		age: 3,
		type: 'dog'
	},
	{
		name: 'Lizzy',
		age: 2,
		type: 'cat'
	},
	{
		name: 'Hot',
		age: 2,
		type: 'dog'
	},
	{
		name: 'Purr',
		age: 1,
		type: 'cat'
	},
	{
		name: 'Red',
		age: 4,
		type: 'dog'
	},
	{
		name: 'Besto',
		age: 3,
		type: 'cat'
	},
	{
		name: 'Pepper',
		age: 1,
		type: 'dog'
	}
];

/*
Homework:
1. Select only the dogs
2. Select their ages then multiply their ages by 3
3. Sum the results
*/

// Jawaban 1
let result = [];

result = data.filter(animal => animal.type === 'dog');

// Alternatif unt bbrp baris
// result = data.filter(animal => {
// 	return animal.type === 'dog';
// });

console.log(result);
console.log('Total Data : ',result.length);
// akhir Jawaban 1


// Jawaban 2
let ages = data
	.filter((animal) => {
		return animal.type === 'dog';
}).map((animal) => {
		return animal.age * 3
})
// .reduce((sum, age) => {
// 		return sum + age;
// }, 0)
;
console.log(ages);


// Jawaban 3
let isDog = (animal) => {
	return animal.type === 'dog';
};
let dogYears = (animal) => {
	return animal.age *= 3;
};
let sum = (sum, age) => {
	return sum + age;
};

ages = data
	.filter(isDog)
	.map(dogYears)
	.reduce(sum,0);
console.log(ages);