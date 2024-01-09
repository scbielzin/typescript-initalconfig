function criaErro(): never {
  //never, ela nunca retorna nada
  throw new Error('Erro qualquer');
}

criaErro();
