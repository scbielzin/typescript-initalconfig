//quando a função ou o metódo não retorna NADA, colocarei a função void

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  //só funciona com export
  nome: 'Gabriel',
  sobrenome: 'Arthur',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Gabriel', 'Arthur');
pessoa.exibirNome();

export { pessoa };
