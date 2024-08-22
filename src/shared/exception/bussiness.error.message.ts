import {
  MAX_CHARACTERS_50,
  MAX_CHARACTERS_500,
  ZERO,
} from '../commons/constants';
export const CodeMessage = {
  //Problemas de Validação 001 - 030
  KEY_001: '001',
  KEY_002: '002',
  KEY_003: '003',
  KEY_004: '004',
  KEY_005: '005',

  //Problemas de Client 031 - 050
  KEY_031: '031',
  KEY_032: '032',
  KEY_033: '033',
} as const;

export const BusinessErrorMessage: { [key: string]: string } = {
  [CodeMessage.KEY_001]: 'Informe um valor válido para o campo.',
  [CodeMessage.KEY_002]: 'Informe um valor válido do tipo numérico',
  [CodeMessage.KEY_003]: `Informe um valor válido com no máximo ${MAX_CHARACTERS_50} caracteres.`,
  [CodeMessage.KEY_004]: `Informe um valor válido com no máximo ${MAX_CHARACTERS_500} caracteres.`,
  [CodeMessage.KEY_005]: `Informa um valor maior que ${ZERO}.`,

  [CodeMessage.KEY_031]: 'Erro ao criar um usuario.',
  [CodeMessage.KEY_032]: 'Usuário não encontrado.',
  [CodeMessage.KEY_033]: 'Usuário já existe.',
};
