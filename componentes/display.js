import React from 'react';
import 
{ 
  View, 
  StyleSheet,
  Text,
  TouchableHighlight,
  ColorPropType
} from 'react-native';

export default props =>
{
  return(
    <View style={E.display}>
      <Text 
        style={E.txtDisplayOp}
        numberOfLines={1}
      >
        {props.op}
      </Text>

      <Text
        style={E.txtDisplayRes}
        numberOfLines={1}
      >
        {props.res}
      </Text>
    </View>
  );
}

const E = StyleSheet.create(
{
  display:
  {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#333',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#555'
  },
  txtDisplayRes:
  {
    fontSize: 50,
    color: '#fff'
  },
  txtDisplayOp:
  {
    fontSize: 25,
    color: '#fff'
  }
});
