import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screens/home/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CountData} from '../_actions/action';

function Btn() {
  const dispatch = useDispatch();
  const {count_data} = useSelector(state => state.reducer);

  // onPress 'input' type change (number -> union)
  // -1, 1 이외에 다른 숫자를 넣었을 생길 수 있는 오류 방지
  // string일 경우 오타로 인해 생길 수 있는 오류 방지
  function onPress(input: -1 | 1) {
    let nextValue = (count_data + input) % 10;
    nextValue = nextValue < 0 ? 10 + nextValue : nextValue;
    dispatch(CountData(nextValue));
  }

  return (
    <View style={styles.btn_box}>
      <TouchableOpacity
        onPress={() => {
          onPress(-1);
        }}
        style={styles.btn}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPress(1);
        }}
        style={styles.btn}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Btn;
