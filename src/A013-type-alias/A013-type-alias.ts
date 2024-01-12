type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Gabriel',
  idade: 23,
  salario: 2_800,
};

export function setCorFavorita(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorFavorita(pessoa, 'Azul'));
