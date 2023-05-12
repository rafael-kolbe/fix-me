let coins = 100;
let hamburguers = 0;
let fries = 0;
let sodas = 0;

while (coins > 0) {
  if (coins >= 25) {
    hamburguers++;
    coins -= 25;
  }

  if (coins >= 15) {
    fries++;
    coins -= 15;
  }

  if (coins >= 10) {
    sodas++;
    coins -= 10;
  }
}

console.log(`Coins: ${coins}`);
console.log(`Hamburguers: ${hamburguers}`);
console.log(`Fries: ${fries}`);
console.log(`Sodas: ${sodas}`);
