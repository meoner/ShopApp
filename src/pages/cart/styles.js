import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const cart_page = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 25,
    fontFamily: 'Signika-Bold',
    color: 'tomato',
  },
  totalSum: {
    marginLeft: 10,
    fontSize: 20,
  },
  button: {
    alignSelf: 'center',
    margin: 20,
    borderRadius: 10,
    width: 300,
    backgroundColor: 'tomato',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const cart_item = StyleSheet.create({
  container: {
    margin: 10,
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
});

export {cart_page, cart_item};
