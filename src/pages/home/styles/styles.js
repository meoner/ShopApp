import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const product_list = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  imageButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: deviceSize.width * 0.3,
    height: deviceSize.height * 0.2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'black',
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

const category_list = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
  },
  buttonContainer: {},
  title: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const title_style = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 25,
    fontFamily: 'Signika-Bold',
    color: 'tomato',
  },
});

export {product_list, category_list, title_style};
