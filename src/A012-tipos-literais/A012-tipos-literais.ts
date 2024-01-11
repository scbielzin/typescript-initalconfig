let x = 10; // eslint-disable-line

x = 0b1010; //binário

const y = 10; //É um subtipo number que só pode receber 10

//y = 0b1010; não pode receber binário pois é uma constante

let a : 100 = 100; //eslint-disable-line
//só pode receber 100
//não é recomendado

const person = {
  name: 'Gabriel' as const, //tipo "Gabriel"
  surname: 'Arthur', //tipo string
};

//person.name = 'arthur'; não consigo mudar não é tipo "Gabriel"

//Module mode

export default 1;
