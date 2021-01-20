import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

function Empty() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{alignSelf: 'center', width: 100}}
        source={require('./empty.json')}
        autoPlay
      />
    </View>
  );
}

export {Empty};
