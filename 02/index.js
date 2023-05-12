const coins = 100;
let hamburguers = 0;
let fries = 0;
let sodas = 0;

while (coins > 0) {
  coins -= 25;

  if (coins >= 25) {
    hamburguers++;
    coins -= 15;
  }

  if (coins >= 15) {
    fries++;
    coins -= 10;
  }

  if (sodas >= 10) {
    sodas++;
  }
}

console.log(`Coins: ${coins}`);
console.log(`Hamburguers: ${hamburguers}`);
console.log(`Fries: ${fries}`);
console.log(`Sodas: ${sodas}`);

/*  CÓDIGO ORIGINAL DO EXERCÍCIO

const coins = 100;
let hamburguers = 0;
let fries = 0;
let sodas = 0;

while (coins > 0) {
  coins -= 25;

  if (coins >= 25) {
    hamburguers++;
    coins -= 15;
  }

  if (coins >= 15) {
    fries++;
    coins -= 10;
  }

  if (sodas >= 10) {
    sodas++;
  }
}

console.log(`Coins: ${coins}`);
console.log(`Hamburguers: ${hamburguers}`);
console.log(`Fries: ${fries}`);
console.log(`Sodas: ${sodas}`);

*/
