import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {detail_style} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

function DetailCard({data, onFavorite, onCart}) {
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  let cartButton = useRef(null);

  async function pickColor() {
    let products = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    let abc = products.some((item) => item.id === data.id) ? 'red' : 'gray';
    setColor(abc);
  }

  function changeColor() {
    if (color === 'gray') {
      setColor('red');
    }
  }

  useEffect(() => {
    pickColor();
  }, []);

  return (
    <View style={detail_style.container}>
      <TouchableOpacity
        style={detail_style.favContainer}
        onPress={() => {
          onFavorite();
          changeColor();
        }}>
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
        <TouchableOpacity
          style={detail_style.cartContainer}
          onPress={() => {
            cartButton.play();
            return dispatch({type: 'ADD_TO_BASKET', payload: {data}});
          }}>
          <LottieView
            ref={(animation) => {
              cartButton = animation;
            }}
            source={require('./cart.json')}
            loop={false}
          />
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
