let x;

if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  //type anotation
  firstName: string;
  lastName?: string;
} {
  //escopo da função
  return { firstName, lastName };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x; //por ser uma linguagem tipada não era boa pratica
  return null; //mas ocorre ocasionalmente
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 2);
}
