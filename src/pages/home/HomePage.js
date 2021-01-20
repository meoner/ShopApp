import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList} from 'react-native';
import {CategoryList, ProductList, Title} from './components';
import {useFetch} from '../../hooks/useFetch';
import {useSelector, useDispatch} from 'react-redux';
import {Loading, Error, Empty} from '../../general';

function HomePage({navigation}) {
  const PRODUCTS_URL = 'https://fakestoreapi.com/products';
  const CATEGORİES_URL = 'https://fakestoreapi.com/products/categories';
  const CATEGORY_PRODUCTS_URL = 'https://fakestoreapi.com/products/category/';
  const ALL_CATEGORİES = 'All Categories';
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const headerTitle = storeData.title;
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let requestUrl = PRODUCTS_URL;
  const categoryData = useFetch(CATEGORİES_URL, null, ALL_CATEGORİES);

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

  if (loading || !data) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

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
        ListEmptyComponent={() => <Empty />}
      />
    </View>
  );
}

export {HomePage};
