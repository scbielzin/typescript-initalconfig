const dadosCliente1: readonly [number, string] = [1, 'Gabriel']; //readonly não permite mudar por pop ou push
const dadosCliente2: [number, string, string?] = [1, 'Gabriel', 'Arthur'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Gabriel', 'Arthur']; //restante tudo string

//interrogações significa opcionais

//tuplas imultáveis

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
