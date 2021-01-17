import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {detail_style} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailCard({data, onFavorite, onCart}) {
  const [color, setColor] = useState(null);

  async function changeColor() {
    let products = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    let abc = products.some((item) => item.id === data.id) ? 'red' : 'gray';
    setColor(abc);
  }
  console.log(color);
  useEffect(() => {
    changeColor();
  }, []);

  return (
    <View style={detail_style.container}>
      <TouchableOpacity style={detail_style.favContainer} onPress={onFavorite}>
        <Icon name="heart" color={color} size={53} />
      </TouchableOpacity>

      <View style={detail_style.imageContainer}>
        <Image
          resizeMode="contain"
          style={detail_style.image}
          source={{uri: data.image}}
        />
      </View>
      <Text style={detail_style.title}>{data.title}</Text>
      <View style={detail_style.basket}>
        <TouchableOpacity style={detail_style.cartContainer} onPress={onCart}>
          <Icon name="cart" color="tomato" size={40} />
        </TouchableOpacity>
        <Text style={detail_style.price}>{data.price} €</Text>
      </View>

      <Text style={detail_style.justDescription}>Description</Text>

      <View style={detail_style.descriptionContainer}>
        <Text style={detail_style.description}> {data.description}</Text>
      </View>
    </View>
  );
}

export {DetailCard};
