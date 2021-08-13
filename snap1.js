let c = "Snap"
let i = "Crackle"
let x = "SnapCrackle"
let contador = 1
let vazio = []
function snapCrackle(num) {
  for (contador = 1; contador <= num;){
    if (contador % 5 === 0 && contador % 2 !== 0) {
      vazio.push(x);
    } else if (contador % 5 === 0) {
      vazio.push(i);
    } else if (contador % 5 === 0 || contador % 2 !== 1) {
      vazio.push(contador)
    } else if (contador % 2 !== 0) {
      vazio.push(c)
    }
    contador++
  }
  let resultado = vazio.toString()
  console.log(typeof resultado)
  return resultado
}
