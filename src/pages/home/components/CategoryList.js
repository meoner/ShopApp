import React from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import {category_list} from '../styles/styles';

function CategoryList({item, onSelect}) {
  return (
    <View style={category_list.container}>
      <TouchableHighlight
        activeOpacity={2}
        underlayColor="tomato"
        style={category_list.buttonContainer}
        onPress={onSelect}>
        <Text style={[category_list.title, {color: 'black'}]}>{item}</Text>
      </TouchableHighlight>
    </View>
  );
}

export {CategoryList};
