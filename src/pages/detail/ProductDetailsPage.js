import React, {useState, useEffect} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {Loading, Error} from '../../general';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DetailCard} from './components';
import {useSelector, useDispatch} from 'react-redux';

function ProductDetailsPage(props) {
  const PRODUCT_API = 'https://fakestoreapi.com/products/';
  const {data, loading, error} = useFetch(PRODUCT_API + props.route.params.id);
  const dispatch = useDispatch();
  //AsyncStorage.clear();

  if (loading || !data) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  async function addToFavorites() {
    let products = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    if (products.some((item) => item.id === data.id)) {
      Alert.alert('Already in favorites');
    } else {
      products.push(data);
      products = JSON.stringify(products);
      await AsyncStorage.setItem('@FAVPRODUCTS', products);
      Alert.alert('Added to favorites');
    }
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <DetailCard
          data={data}
          onFavorite={addToFavorites}
          onCart={() => dispatch({type: 'ADD_TO_BASKET', payload: {data}})}
        />
      </ScrollView>
    </View>
  );
}

export {ProductDetailsPage};
