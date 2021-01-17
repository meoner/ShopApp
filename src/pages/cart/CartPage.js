import React from 'react';
import {View, Text, FlatList, ActivityIndicator, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CartPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.basket);
  const sum = data.reduce(function (acc, obj) {
    return acc + obj.piece * obj.price;
  }, 0);
  console.log('#######', data);
  function renderDD({item}) {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>tutar: {item.piece * item.price}</Text>
      </View>
    );
  }

  async function buyButon() {
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
  // buton ekle reducer datayı sıfırlasın, datayı aysnc stroge'a kaydetsin, aysnc stroge'ı diğer sekmede göster.
  return (
    <View>
      <Text>CartPage</Text>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={data}
        renderItem={renderDD}
        ListEmptyComponent={() => <Text> Sepette ürün yok.</Text>}
      />
      <Text>{sum.toFixed(2)}</Text>
      <Button title="Buy" onPress={buyButon} />
    </View>
  );
}

export {CartPage};
