import React from 'react';
import {View, Text, Image} from 'react-native';
import {cart_item} from '../styles';

function CartItem({data}) {
  return (
    <View style={cart_item.container}>
      <View style={cart_item.productDetail}>
        <View style={cart_item.imageContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri: data.image,
            }}
            style={cart_item.image}
          />
        </View>
        <View style={cart_item.textContainer}>
          <Text style={cart_item.title}>{data.title}</Text>
          <Text> Piece: {data.piece}</Text>
          <Text> Price: {data.piece * data.price} €</Text>
        </View>
      </View>
    </View>
  );
}
export {CartItem};
