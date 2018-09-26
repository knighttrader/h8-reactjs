// ========= Promise =========

// fetch('https://api.faketweet.com/tweets')
// .then(response => {
//   return response.json()
// }).then(tweets => {
//   return tweets.filter(tweet => {
//     return tweet.stars > 50;
//   })
// }).then(tweets => {
//   return tweets.filter(tweet => {
//     return tweet.rts > 50;
//   })
// }).catch(err => {
//   console.error(error);
// });
//
// fetch('https://api.faketweet.com/tweets')
// .then(response => response.json())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//   console.error(error);
// });

// ==================================================

// const doSomething = function(argument) {
//   return new Promise((resolve, reject) => {
    /*
    TODO: try to do something asynchronously
    and resolve or reject according to
    operation result.
    */
//   });
// };

// ==================================================

const setTimeoutPromise = (duration) => new Promise((resolve, reject) => {
  setTimeout(resolve, duration);
});

setTimeoutPromise(1000).then(() => console.log("tick"));

// ==================================================
let isMomHappy = true;

// // Promise
let willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    let phone = {
      brand: 'Samsung',
      color: 'black',
    };

    resolve(phone); // fulfilled
  } else {
    let reason = new Error('mom is not happy');

    reject(reason); // reject
  }
});

// console.log(willIGetNewPhone);

// call our promise
let askMom = () => willIGetNewPhone
.then((result) => {
  console.log('result', result);
  return{...result, price: 1000};
})
.then(function (fulfilled) {
  // yay, you got a new phone
  console.log(fulfilled); // output: { brand: 'Samsung', color: 'black' }
  return fulfilled
})
.catch(function (error) {
  // oops, mom don't buy it
  console.log(error.message); // output: 'mom is not happy'
});

askMom();

// ==================================================

// 2nd promise
let showOff = (phone) => {
  return new Promise((resolve, reject) => {
    let message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';

    resolve(message);
  });
};

// shorten it
// let showOff = (phone) => {
//   console.log(phone);
//   let message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
//
//   return Promise.resolve(message);
// };

// Notes:
// In this example, you might realize we didn't call the reject. It's optional.
// We can shorten this sample like using Promise.resolve instead.

// let askMom1 = () => willIGetNewPhone
// .then(showOff) // chain it here
// .then(function (fulfilled) {
//   console.log(fulfilled); // output: 'Hey friend, I have a new black Samsung phone.'
// })
// .catch(function (error) {
//   // oops, mom don't buy it
//   console.log(error.message); // output: 'mom is not happy'
// });

// askMom1();

// ==================================================

let askMom2 = () => {
  console.log('before asking Mom'); // log before
  willIGetNewPhone
  .then(showOff)
  .then(function (fulfilled) {
    console.log(fulfilled);
  })
  .then((result) => {
    console.log('after asking mom');
  })
  .catch(function (error) {
    console.log(error.message);
  });
};

askMom2();

// Output:
// 1. before asking Mom
// 2. after asking mom
// 3. Hey friend, I have a new black Samsung phone.

// That's something we call asynchronous, the code will run without blocking or waiting for the result.
// Anything that need to wait for promise to proceed, you put that in .then.

// ========= async/await =========

// fetch('https://api.faketweet.com/tweets')
// .then(response => response.json())
// .then(tweets => tweets.filter(tweet => tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
// .catch(err => {
//   console.error(error);
// });
//
// // ====> turned into
//
// const response = await fetch('https://api.faketweet.com/tweets');
// const tweets = await response.json();
// let tweets = tweets.filter(tweet => tweet.stars > 50);
// tweets = tweets.filter(tweet => tweet.rts > 50);
// console.log(tweets);
//
// // error: "Unresolved variable or type await"
//
// // ====> put async
//
// const fetchTweets = async () => {
//   const response = await fetch("https://api.faketweet.com/tweets");
//   const tweets = await response.json();
//   let tweets = tweets.filter(tweet => tweet.stars > 50);
//   tweets = tweets.filter(tweet => tweet.rts > 50);
//   console.log(tweets);
// };
//
// fetchTweets();
//
// // ====> IIFE (Immediately Invoked Function Expression)
//
// (async () => {
//   const response = await fetch("https://api.faketweet.com/tweets");
//   let tweets = await response.json();
//   let tweets = tweets.filter(tweet => tweet.stars > 50);
//   tweets = tweets.filter(tweet => tweet.rts > 50);
//   console.log(tweets.length);
// })();

// ==================================================

// call our promise
const askMom3 = async() => {
  try {
    let phone = await willIGetNewPhone;

    console.log('before asking Mom');

    let message = await showOff(phone);

    console.log(message);
    console.log('after asking mom');
  }
  catch (error) {
    console.log(error.message);
  }
};

askMom3();

// Resources for next session:
// https://medium.com/skyshidigital/1-pendahuluan-seminggu-menjadi-master-react-js-seri-tingkat-dasar-7b6ec7b04af
// https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4