// DESTRUCTURING OBJECT

// Menambahkan property satu per satu
const user = {};
user.name = 'Adi Nugroho';
user.handle = '@adinugroho';
user.location = 'Jakarta, Indonesia';
console.log(user);

// extraction
const name = user.name;
const handle = user.handle;
const location = user.location;
console.log(name, handle);
console.log('\n');


// Menambahkan property sekaligus
const user1 = {
  name: 'Budi Nugroho',
  handle: '@budinugroho',
  location: 'Jakarta, Indonesia'
}

// extraction
const name1 = user1.name;
const handle1 = user1.handle;
const location1 = user1.location;
console.log(name1, handle1, location1);
console.log('\n');


// Mendestructuring sekaligus
const user2 = {
  name2: 'Chandra Nugroho',
  handle2: '@chandranugroho',
  location2: 'Jakarta, Indonesia'
}

// extraction
const { name2, handle2, location2 } = user2;
console.log(name2, handle2, location2);
console.log('\n');


// DESTRUCTURING FUNCTION

const getUser = () => {
  return {
    name3: 'Doni Nugroho',
    handle3: '@doninugroho',
    location3: 'Jakarta, Indonesia'
  };
}

// extraction
const { name3, handle3, location3 } = getUser();
console.log(name3, handle3, location3);
console.log('\n');


// Aliasing Object Property
const user4 = {
  n: 'Eko Nugroho',
  h: '@ekonugroho',
  l: 'Jakarta, Indonesia'
}

// extraction
const { n: name4, h: handle4, l: location4 } = user4;
console.log(name4, handle4, location4);
console.log(user4.n, user4.h, user4.l);
console.log('\n');


// DESTRUCTURING ARRAY
const csv = "1997,Ford,F350,Must Sell!!";
const [year, make, model, description] = csv.split(",");

console.log(csv)
console.log(make, model, year, description);
console.log(year);
console.log(model);