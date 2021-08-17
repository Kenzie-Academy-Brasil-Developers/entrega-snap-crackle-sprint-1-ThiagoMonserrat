function snapCrackle(num){
  let x = " "
  for (contador = 1; contador <= num; contador++){
    if (contador % 5 === 0 && contador % 2 !== 0) {
      x = x + "SnapCrackle" + ", "
    } else if (contador % 5 === 0 && contador % 2 === 0) {
        x = x + "Crackle" + ", "
    } else if (contador % 2 === 0) {
        x = x + contador + ", "
    } else if (contador % 5 === 0 && contador % 2 === 0) {
        x = x + "Crackle" + ", "
    } else if (contador % 2 !== 0) {
        x = x + "snap" + ", "
      } 
  }
  console.log(x)
  return x
}
