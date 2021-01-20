import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{alignSelf: 'center', width: 100}}
        source={require('./loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}

export {Loading};
