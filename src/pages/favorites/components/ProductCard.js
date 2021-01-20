import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {product_card} from '../styles';

function ProductCard(props) {
  return (
    <View style={product_card.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          resizeMode="contain"
          style={product_card.image}
          source={{uri: props.product.image}}
        />
        <View style={product_card.touchableContainer}>
          <Text style={product_card.title}>{props.product.title}</Text>
          <Text style={product_card.description} numberOfLines={1}>
            {props.product.description}
          </Text>
          <Text style={product_card.price}>${props.product.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={product_card.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.deleteFunction(props.product.id)}>
          <View style={product_card.button}>
            <Icon name="trash-can" color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {ProductCard};
