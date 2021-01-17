import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './context/reducer';
import initialState from './context/store';

import {
  CartPage,
  FavoritesPage,
  HomePage,
  OrdersPage,
  ProductDetailsPage,
} from './pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ProuctDetails" component={ProductDetailsPage} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favorites" component={FavoritesPage} />
      <Stack.Screen name="ProuctDetails" component={ProductDetailsPage} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <Provider store={createStore(reducer, initialState)}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="ProductStack"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) =>
              generateIcon(focused, color, route),
            tabBarLabel: () => null,
          })}
          tabBarOptions={{
            activeTintColor: '#FF5733',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="ProductStack" component={ProductStack} />
          <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
          <Tab.Screen name="Orders" component={OrdersPage} />
          <Tab.Screen name="Cart" component={CartPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;
  switch (route.name) {
    case 'ProductStack':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'FavoriteStack':
      iconName = focused ? 'heart' : 'heart-outline';
      break;
    case 'Orders':
      iconName = focused ? 'shopping' : 'shopping-outline';
      break;
    case 'Cart':
      iconName = focused ? 'cart' : 'cart-outline';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={30} />;
}
