import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Str, Num, Btn} from '../../components';

function Home() {
  return (
    <View style={styles.container}>
      <Str />
      <Num />
      <Btn />
    </View>
  );
}

export default Home;
