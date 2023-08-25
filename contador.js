function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let char of texto.toLowerCase()) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const frase = prompt('Digite uma frase:');
  const numeroVogais = contarVogais(frase);
  
  console.log(`O número de vogais na frase é: ${numeroVogais}`);