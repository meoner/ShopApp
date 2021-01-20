import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function OrdersPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  async function getOrder() {
    setLoading(true);
    const products = await AsyncStorage.getItem('@BUY');
    const parsedProducts = JSON.parse(products);
    /*
    let arrayToPrint = [];
    for (let i = 0; i < parsedProducts.length; i++) {
      arrayToPrint.push(...parsedProducts[i]);
    } */
    setData(parsedProducts.reverse()[0]);
    setLoading(false);
  }

  function totalSum() {
    return data.reduce(function (acc, obj) {
      return acc + obj.piece * obj.price;
    }, 0);
  }

  useEffect(() => {
    getOrder();
  }, [isFocused]);

  function renderComponent({item}) {
    return (
      <View style={cart_item.container}>
        <View style={cart_item.productDetail}>
          <View style={cart_item.imageContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: item.image,
              }}
              style={cart_item.image}
            />
          </View>
          <View style={cart_item.textContainer}>
            <Text style={cart_item.title}>{item.title}</Text>
            <Text> Piece: {item.piece}</Text>
            <Text> Price: {item.piece * item.price} €</Text>
          </View>
        </View>
      </View>
    );
  }

  if (loading) {
    return <Text>loading...</Text>;
  }
  return (
    <View>
      <Text style={cart_item.text}>  Last Order</Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={data}
        renderItem={renderComponent}
      />
      {data.length === 0 ? null : (
        <Text style={cart_item.totalSum}>Total: {totalSum().toFixed(2)} €</Text>
      )}
    </View>
  );
}

const deviceSize = Dimensions.get('window');

const cart_item = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 25,
    fontFamily: 'Signika-Bold',
    color: 'tomato',
  },
  imageContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  productDetail: {
    flexDirection: 'row',
  },
  textContainer: {
    marginRight: 10,
  },
  title: {
    marginRight: 10,
    width: deviceSize.width * 0.65,
    fontSize: 18,
  },
  totalSum: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export {OrdersPage};
