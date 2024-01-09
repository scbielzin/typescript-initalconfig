enum Cores {
  VERMELHO, //0
  AZUL = 10, //1
  AMARELO, //2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 1, //PRECISA INICIAR UM NÚMERO PRA ELE VOLTAR A CONTAR DEPOIS DE ROXO por ser string
}

//o ts vai unir os 2 enums em um só

console.log(Cores);
console.log(Cores.VERMELHO); //retorna id 0
console.log(Cores[0]); //retorna vermelho
console.log(Cores[10]); //retorna azul

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
