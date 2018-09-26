// ======== Homework Promise, async/await =========
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let result = array.map((element) => {
      if (typeof element === 'string') {
        return element.toUpperCase();
      } else {
        return element;
      }
    });

    resolve(result);
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    let result = array.sort();

    resolve(result);
  });
};

makeAllCaps(arrayOfWords);
sortWords(arrayOfWords);

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))