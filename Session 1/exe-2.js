// Array

let iniString = 'hallo hallo';

let arrayIniString = iniString.split(' ');
console.log(arrayIniString);
 
let arrayStringBerikutnya = [[1,2,3], [2,3,4]];
console.log(arrayStringBerikutnya);

let objectString = {
	nomor: 0,
	nama: 'Fadly',
};
arg = 'nomor';


console.log(objectString.nomor);
console.log(objectString['nomor']); 
console.log(objectString[arg]);

function getString1() {
	return {
		nomor: 0,
		nama: 'Fadly',
	};
};

console.log(getString1());

let getString = () => {
	return {
		nomor: 0,
		nama: 'Fadly',
	};
};

console.log(getString());

let arrayObject = [
	{
		nomor: 0,
		nama: 'Fadly',
	},
	{
		nomor: 1,
		nama: 'Hacktiv8',
	}
];

arrayObject[0].nomor;
arrayObject[1].nomor;

console.log(arrayObject[0].nomor);
console.log(arrayObject[1].nomor);


