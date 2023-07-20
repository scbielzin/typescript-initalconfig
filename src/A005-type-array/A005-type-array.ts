// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

//Formatos Read Only, tira a multabilidade por pop, push...
const array1: readonly string[] = ['Gabriel', 'Arthur'];
const array2: ReadonlyArray<string> = ['Gabriel', 'Arthur'];

console.log(array1);
console.log(array2);

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upperCase = toUpperCase('alo');

console.log(result);
console.log(concatenacao);
console.log(upperCase);
