import React, {useState, useEffect} from 'react';
import {View, RefreshControl, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProductCard} from './components/ProductCard';
import {Empty} from '../../general/Empty.js';

function FavoritesPage(props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function getFavorites() {
    setLoading(true);
    const products = await AsyncStorage.getItem('@FAVPRODUCTS');
    const parsedProducts = JSON.parse(products);
    setLoading(false);
    setProducts(parsedProducts);
  }

  async function removeFromFavorites(id) {
    let products = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    let filteredProducts = products.filter((item) => item.id != id);
    products = JSON.stringify(filteredProducts);
    await AsyncStorage.setItem('@FAVPRODUCTS', products);
    getFavorites();
  }
  useEffect(() => {
    getFavorites();
  }, []);
  function renderProduct({item}) {
    return (
      <ProductCard
        product={item}
        onPress={() =>
          props.navigation.navigate('ProuctDetails', {id: item.id})
        }
        deleteFunction={removeFromFavorites}
      />
    );
  }

  function renderEmpty() {
    return <Empty />;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getFavorites} />
        }
      />
    </View>
  );
}

export {FavoritesPage};
