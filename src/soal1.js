const readline = require('readline');
const { sqrt } = require('math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan bilangan genap (x): ', (x) => {
  const numberX = Number(x);

  if (numberX < 0) {
    console.log("Tidak bisa input bilangan negatif");
  } else if (numberX % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil");
  } else {
    const akarPangkatDua = Math.sqrt(numberX);
    console.log(`Akar pangkat dua dari ${numberX} adalah ${akarPangkatDua}`);
  }

  rl.close();
});