function showMessage(msg: any) {
  //pode receber qualquer coisa em msg : any
  //se eu realmente quiser receber um tipo any, ponho msg: any
  //só msg dará erro pelo strict:true no ts config
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá!'));
