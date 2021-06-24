import React, { useState } from 'react';
import 
{ 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  SafeAreaView,
  TextInput,
  View
} from 'react-native';

export default function App() {

  const [ op, setOp ] = useState(0);
  const [ res, setRes ] = useState(0);

  const Operador = () =>
  {
    setRes( eval(op) );
  }

  return (
    <SafeAreaView style={E.container}>
      <Text style={E.titulo}>Calculadora - Joao</Text>

      <View style={E.displayOp}>
        <TextInput
          value={String(op)}
          style={E.display}
          onChangeText={ (txt) => { setOp(txt) } }
        ></TextInput>

        <TextInput
          value={String(res)}
          style={E.display}
          keyboardType='numeric'
        ></TextInput>
      </View>

      <View style={E.displayBtn}>
        <TouchableHighlight
            onPress={ () => {Operador()} }
            style={E.resBtn}
          >
          <Text style={E.res}>Calcular</Text>
        </TouchableHighlight>

      </View>
    </SafeAreaView>
  );
}

const E = StyleSheet.create(
{
  container:
  {
    backgroundColor: '#333',
  },
  titulo:
  {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 20,
    color: '#1E90FF',
    display: 'flex',
    alignSelf: 'center'
  },
  display:
  {
    borderRadius: 3,
    padding: 15,
    marginTop: 4,
    marginBottom: 4,
    color: 'white',
    fontSize: 30
  },
  displayOp:
  {
    padding: 10,
    backgroundColor: '#555',
    borderRadius: 2
  },
  displayBtn:
  {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  resBtn:
  {
    backgroundColor: '#bbb'
  },
  res:
  {
    fontSize: 30,
    padding: 10
  }
});
