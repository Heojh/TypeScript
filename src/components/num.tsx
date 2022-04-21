import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screens/home/styles';
import {useSelector} from 'react-redux';

function Num() {
  const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const {count_data} = useSelector(state => state.reducer);

  return (
    <View style={styles.view_box}>
      <Text style={styles.view_text}>{num[count_data]}</Text>
    </View>
  );
}

export default Num;
