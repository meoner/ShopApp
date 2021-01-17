import React from 'react';
import {View, Text} from 'react-native';
import {title_style} from '../styles/styles';

function Title({title}) {
  return (
    <View style={title_style.container}>
      <Text style={title_style.text}>{title}</Text>
    </View>
  );
}

export {Title};
