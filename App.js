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
import Display from './componentes/display';
import Btn from './componentes/botoes';

let estados =
{
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false
}

export default function App() 
{
  const [ vTela, setVop ] = useState( estados.valorTela );
  const [ vRes, setVres ] = useState( estados.resultado );

  const addDigito = (d) =>
  {
    if( d === '+' || d === '-' || d === '*' || d === '/' )
    {
      estados.ponto = false;
    }
    if( d === '.' && !estados.ponto)
    {
      estados.ponto = true;
      
      estados.operado = false;
    }
    else if( d === '.' && estados.ponto )
    {
      return;
    }
    
    if( (d === '+' || d === '-' || d === '*' || d === '/') && estados.operado )
    {
      estados.valorTela = estados.resultado;
    }
    
    estados.valorTela = estados.valorTela + d;
    
    setVop(estados.valorTela);
    setVres(estados.resultado);
    
    estados.operado = false;
  }

  const limparTela = () =>
  {
    estados =
    {
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false
    }
    
    setVop(estados.valorTela);
    setVres(estados.resultado);
  }

  const opera = (d) =>
  {
    if( d === 'AC' )
    {
      limparTela();
      
      return;
    }
    if( d === 'BS')
    {
      estados.valorTela = vTela.substring(0, (vTela.length-1) );
      
      setVop( estados.valorTela );
      
      return;
    }
    
    try
    {
      estados.resultado = eval( estados.valorTela );
      
      estados.operado = true;
      estados.valorTela = '';
      
      setVres( estados.resultado );
      setVop( estados.valorTela );
    }
    catch( err )
    {
      alert('Erro, essa não é uma operação matemática');
      
      estados.operado = false;
      
      estados.valorTela = '';
      
      setVres( estados.resultado );
      setVop( estados.valorTela );
    }
  }

  return (
    <SafeAreaView style={E.container}>
      <Text style={E.titulo}>Calculadora - João</Text>
      
      <Display op={vTela} res={vRes}/>
      
      <View style={E.btn}>
        <Btn label='AC' ac aoApertar={() => {limparTela()}}/>
        <Btn label='(' op aoApertar={() => {addDigito('(')}}/>
        <Btn label=')' op aoApertar={() => {addDigito(')')}}/>
        <Btn label='/' op aoApertar={() => {addDigito('/')}}/>
        <Btn label='1' aoApertar={() => {addDigito('1')}}/>
        <Btn label='2' aoApertar={() => {addDigito('2')}}/>
        <Btn label='3' aoApertar={() => {addDigito('3')}}/>
        <Btn label='*' op aoApertar={() => {addDigito('*')}}/>
        <Btn label='4' aoApertar={() => {addDigito('4')}}/>
        <Btn label='5' aoApertar={() => {addDigito('5')}}/>
        <Btn label='6' aoApertar={() => {addDigito('6')}}/>
        <Btn label='+' op aoApertar={() => {addDigito('+')}}/>
        <Btn label='7' aoApertar={() => {addDigito('7')}}/>
        <Btn label='8' aoApertar={() => {addDigito('8')}}/>
        <Btn label='9' aoApertar={() => {addDigito('9')}}/>
        <Btn label='-' op aoApertar={() => {addDigito('-')}}/>
        <Btn label='0' aoApertar={() => {addDigito('0')}}/>
        <Btn label='<-' bs aoApertar={() => {opera('BS')}}/>
        <Btn label='.' op aoApertar={() => {addDigito('.')}}/>
        <Btn label='=' igual aoApertar={() => {opera('RES')}}/>
      </View>
    </SafeAreaView>
  );
}

const E = StyleSheet.create(
{
  container:
  {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
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
  btn:
  {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});
