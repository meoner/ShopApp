import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const product_card = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
  },
  touchableContainer: {
    padding: 20,
  },
  image: {
    height: deviceSize.height / 3,
    resizeMode: 'cover',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#bfbfbf',
  },
  price: {
    color: 'black',
    fontSize: 20,
  },
  buttonContainer: {
    zIndex: 1,
    position: 'absolute',
    right: 10,
    bottom: 4,
  },
  button: {
    width: deviceSize.width / 9,
    height: deviceSize.width / 9,
    borderRadius: 100,
    borderColor: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    alignContent: 'center',
    padding: 6,
  },
});

export {product_card};
