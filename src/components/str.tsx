import React from 'react';
import {View, Text} from 'react-native';
import styles from '../screens/home/styles';
import {useSelector} from 'react-redux';

function Str() {
  const str: string[] = [
    '일',
    '이',
    '삼',
    '사',
    '오',
    '육',
    '칠',
    '팔',
    '구',
    '영',
  ];
  const {count_data} = useSelector(state => state.reducer);

  return (
    <View style={styles.view_box}>
      <Text style={styles.view_text}>{str[count_data]}</Text>
    </View>
  );
}

export default Str;
