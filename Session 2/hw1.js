/*
Homework 1:
1. present = true
2. count the lenght of the result
3. print the result

Homework 2:
1. every name tambahkan + 'Green'
2. print the result

Homework 3:
1. sebuah string yang isinya nama dengan dipisahkan koma. Contoh: 'Fadly Kayo, Alan, Budi, dst';
2. print the result

*/

var fs = require('fs');

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      {kitchen: false},
      {ballroom: false},
      {conservatory: false},
      {'dining room': false},
      {'billiard room': false},
      {library: false}
    ]
  }
];


// Homework 1:
let present = [];

present = videoData.filter(video => video.present === true);

console.log(present);
console.log('Total Data : ',present.length);

// Homework 2:
let names = videoData.map((video) => video.name + " Green ");
console.log(names);

// Homework 3:
let names1 = videoData.reduce((name, order) => name + order.name + ", ", "");
let names2 = names1.slice(0, names1.length-2);
console.log(names2);