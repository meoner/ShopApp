import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {CategoryList, ProductList, Title} from './components';
import {useFetch} from '../../hooks/useFetch';
import {useSelector, useDispatch} from 'react-redux';

function HomePage({navigation}) {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products';
  const CATEGORİES_URL = 'https://fakestoreapi.com/products/categories';
  const CATEGORY_PRODUCTS_URL = 'https://fakestoreapi.com/products/category/';
  const allCategories = 'All Categories';
  const [refreshToggle, setRefreshToggle] = useState(0);
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const headerTitle = storeData.title;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let requestUrl = PRODUCTS_URL;
  const categoryData = useFetch(CATEGORİES_URL, null, allCategories); // kategoriler geldi.

  async function fetchData(url, config, param) {
    setLoading(true);
    const {data: serverData} = await axios
      .get(url, config)
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });

    setLoading(false);

    param === 'All Categories'
      ? setData([param, ...serverData])
      : setData(serverData);
  }
  function renderProduct({item}) {
    return (
      <ProductList
        item={item}
        onSelect={() => navigation.navigate('ProuctDetails', {id: item.id})}
      />
    );
  }

  useEffect(() => {
    fetchData(requestUrl);
  }, []);

  function renderCategory({item}) {
    return (
      <CategoryList
        item={item}
        onSelect={async function () {
          await dispatch({type: 'CHANGE_TITLE', title: item});
          requestUrl =
            item === 'All Categories'
              ? PRODUCTS_URL
              : CATEGORY_PRODUCTS_URL + item;
          setData([]);
          await fetchData(requestUrl);
        }}
      />
    );
  }
  return (
    <View style={{flex: 1}}>
      <Title title={headerTitle} />
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={categoryData.data}
        renderItem={renderCategory}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={data}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="tomato" />
        )}
      />
    </View>
  );
}

export {HomePage};

//const finalData = () => dispatch({type: 'CHANGE_DATA', data: data});
//const categoryList = [allCategories, ...categoryData.data];
/*const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState(allCategories);*/
//finalData();
// console.log(data);
//ürünler listelendi
/*const categoryProducts = useFetch(specificCatetegory);*/

/* //buradan
  const [product, setProduct] = useState(null);
  async function fetchProduct(param) {
    if(param === allCategories) {
      const response = await axios.get(PRODUCTS_URL);
      setProduct(response.data);
    }
    else{
      const response = await axios.get(CATEGORY_PRODUCTS_URL + param);
      setProduct(response.data);
    }
  }

  useEffect(() => {
    fetchProduct();

  }, []);

//buraya kadar
  async function fetchCategoryProduct(param) {
    setTitle(param);
    const response = await axios.get(specificCatetegory + param);
    setProduct(response.data);
  }

   async function fetchCategory() {
    const response = await axios.get(categoryUrl);
    setCategory([allCategories, ...response.data]);
  }
  useEffect(() => {
    fetchProduct();

  }, []);
*/
