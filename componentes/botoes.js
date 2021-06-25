import React from 'react';
import 
{ 
  TouchableHighlight, 
  StyleSheet, 
  Text,
  Dimensions
} from 'react-native';

export default props =>
{
  const estilosBtns = [ E.btn ];

  if( props.duplo )
    estilosBtns.push(E.btnDuplo);

  if( props.igual )
    estilosBtns.push(E.btnIgual);

  if( props.op )
    estilosBtns.push(E.btnOp);

  if( props.bs)
    estilosBtns.push(E.btnBack);

  if( props.ac )
    estilosBtns.push(E.btnClear);

  return(
    <TouchableHighlight
      onPress={props.aoApertar}
    >
      <Text style={estilosBtns}>{props.label}</Text>
    </TouchableHighlight>
  );
}

const E = StyleSheet.create(
{
  btn:
  {
    fontSize: 30,
    //Aqui, pegamos a largura da janela e dividimos por 4,
    //assim, temos 5 linhas com botões quadrados.
    height: Dimensions.get('window').width / 4,
    //A mesma coisa para Largura, teremos 4 colunas
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#444',
    color: 'white',
    textAlign: 'center'
  },
  btnIgual:
  {
    color: '#87CEFA'
  },
  btnOp:
  {
    color: '#87CEFA'
  },
  btnClear:
  {
    color: '#00FA9A'
  },
  btnBack:
  {
    color: '#FA8072'
  },
  btnDuplo:
  {
    width: (Dimensions.get('window').width / 4) * 2
  }
});
