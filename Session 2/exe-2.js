// Higher Order Function

setInterval(() => {
  console.log("Tack");
}, 1000);

// Altenatif 1

const printTick = () => {
  console.log("Tick");
};

setInterval(printTick, 1000);

// Alternatif 2

setInterval(printTuck, 1000);

function printTuck()  {
  console.log("Tuck");
  console.log('');
};