import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Empty} from '../../general';
import {CartItem} from './components';
import {cart_page} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CartPage() {
  const data = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const totalSum = data.reduce(function (acc, obj) {
    return acc + obj.piece * obj.price;
  }, 0);
  async function buyButton() {
    let oldBuy = await AsyncStorage.getItem('@BUY');
    if (!oldBuy) {
      oldBuy = [];
    } else {
      oldBuy = JSON.parse(oldBuy);
    }
    oldBuy.push(data);
    oldBuy = JSON.stringify(oldBuy);
    await AsyncStorage.setItem('@BUY', oldBuy);
    dispatch({type: 'DELETE_BASKET'});
  }
  useEffect(() => {}, [isFocused]);

  function renderComponent({item}) {
    return (
      <View>
        <CartItem data={item} />
      </View>
    );
  }
  console.log(data);
  return (
    <View>
      <View style={cart_page.container}>
        <Text style={cart_page.text}>Your Cart</Text>
      </View>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={data}
        renderItem={renderComponent}
        ListEmptyComponent={() => <Empty />}
      />
      {data.length === 0 ? null : (
        <Text style={cart_page.totalSum}>Total: {totalSum.toFixed(2)} €</Text>
      )}
      {data.length === 0 ? null : (
        <TouchableOpacity onPress={buyButton} style={cart_page.button}>
          <Text style={cart_page.buttonText}> Buy </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export {CartPage};
