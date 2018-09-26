function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const p = new Person();


// Perbaikan Bug dengan simpan ke Variable lain

function Person1() {
  this.age = 0;

  const that = this;
  setInterval(function() {
    that.age++;
    console.log('Alternatif dgn variable lain  : ' + that.age);
  }, 1000);
}

const p1 = new Person1();


// Perbaikan Bug dengan menambah method Bind

function Person2() {
  this.age = 0;

  setInterval(function() {
    this.age++;
    console.log('Alternatif dgn method Bind    : ' + this.age);
  }.bind(this), 1000);
}
const p2 = new Person2();


// Penyempurnaan dengan Arrow Function

function Person3() {
  this.age = 0; // let age = 0; 

  setInterval(() => {
    this.age++; // this bisa tdk digunakan
    console.log('Alternatif dgn Arrow Function : ' + this.age); // this bisa tdk digunakan
  }, 1000);
}

const p3 = new Person3();


// Membatasi Looping SetInterval

function Person4() {
  this.age = 0;

  this.intervalHitung = setInterval(() => {
    this.age++;
    console.log('Alternatif dgn limit 5x saja  : ' + this.age);
    if (this.age == 5) {
    	clearInterval(this.intervalHitung);
    };
  }, 1000);
}

const p4 = new Person4();