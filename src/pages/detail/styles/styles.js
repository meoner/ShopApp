import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const detail_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  favContainer: {
    alignSelf: 'flex-end',
    margin: 12,
    elevation: 2,
  },
  imageContainer: {
    marginHorizontal: 20,
    borderWidth: 1,
    bottom: 40,
    borderRadius: 10,
    borderColor: 'tomato',
  },
  image: {
    width: deviceSize.width * 0.5,
    height: deviceSize.height * 0.5,
    alignSelf: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Signika-Bold',
    color: '#566573',
    textAlign: 'center',
    bottom: 20,
  },
  basket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  cartContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#D0D3D4',
  },
  price: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'Signika-Bold',
    color: '#1C2833',
  },
  justDescription: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  descriptionContainer: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EAECEE',
    borderColor: 'rgba(213, 216, 220, 0.2)',
  },
  description: {
    letterSpacing: 0.5,
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export {detail_style};
