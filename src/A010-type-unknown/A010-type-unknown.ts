//any mais seguro

let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y); //vai concatenar

//no tipo unknown ele deixa atribuir qualquer valor
//mas não deixa concatenar
//só se checar o type of
