const wordWithHyphens = "J-A-V-A-S-C-R-I-P-T";
let formattedWord = "";

for (const letter of wordWithHyphens) {
  if (letter === "-") {
    continue;
  }

  formattedWord += letter;
}

console.log(formattedWord);
