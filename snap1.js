let c = "Snap";
let i = "Crackle";
let x = "SnapCrackle";
let maxValue = 20;
let contador = 1;
let vazio = [];
function snapCrackle() {
  for (contador = 1; contador <= maxValue;){
    if (contador % 5 === 0 && contador % 2 !== 0) {
      vazio.push(x);
    } else if (contador % 5 === 0) {
      vazio.push(i);
    } else if (contador % 5 === 0 || contador % 2 !== 1) {
      vazio.push(contador);
    } else if (contador % 2 !== 0) {
      vazio.push(c);
    }
    contador++;
  }
  return vazio 
}
console.log(snapCrackle().join());
