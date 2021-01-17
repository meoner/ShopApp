import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {product_list} from '../styles/styles';

function ProductList({item, onSelect}) {
  return (
    <View style={product_list.container}>
      <TouchableOpacity style={product_list.imageButton} onPress={onSelect}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={product_list.image}
        />
      </TouchableOpacity>
      <View style={product_list.textContainer}>
        <Text style={product_list.title}>{item.title}</Text>
        <View style={product_list.priceContainer}>
          <Text style={product_list.price}>{item.price} €</Text>
        </View>
      </View>
    </View>
  );
}

export {ProductList};
