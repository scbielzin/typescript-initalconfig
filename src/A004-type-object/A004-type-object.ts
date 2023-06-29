const objetoA: {
  readonly chaveA: string; //não permite alterar fora do objeto, somente leitura!
  chaveB: string;
  chave?: string; //opcional
  [key: string]: unknown; //se quiser criar mais chaves no objeto fora dele
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro Valor';

//objetoA.chaveD = 'KKKK' não funciona
