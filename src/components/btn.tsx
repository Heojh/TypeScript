import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screens/home/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CountData} from '../_actions/action';

function Btn() {
  const dispatch = useDispatch();
  const {count_data} = useSelector(state => state.reducer);

  // git push
  function onPress(input: number) {
    let nextValue = (count_data + input) % 10;
    console.log(nextValue);
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
