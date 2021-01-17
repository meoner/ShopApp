import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function OrdersPage() {
  const [data, setData] = useState(null);

  async function getFavorites() {
    const products = await AsyncStorage.getItem('@BUY');
    const parsedProducts = JSON.parse(products);
    console.log(parsedProducts);
    setData(parsedProducts[0]);
  }
  // [[{ürün1},{ürün2},{ürün3}], [{ürün1},{ürün2}]]

  useEffect(() => {
    getFavorites();
  }, []);

  function renderDD({item}) {
    return <Text>{item.title}</Text>;
  }
  if (data) {
    return (
      <View>
        <Text>OrdersPage</Text>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={data}
          renderItem={renderDD}
          ListEmptyComponent={() => <Text> Sepette ürün yok.</Text>}
        />
      </View>
    );
  } else {
    return null;
  }
}

export {OrdersPage};
