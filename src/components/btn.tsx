import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screens/home/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CountData} from '../_actions/action';

function Btn() {
  const dispatch = useDispatch();
  const {count_data} = useSelector(state => state.reducer);

  // git push
  function onPress(input: string) {
    switch (input) {
      case 'up':
        if (count_data === 9) {
          dispatch(CountData(0));
        } else {
          dispatch(CountData(count_data + 1));
        }
        break;
      case 'down':
        if (count_data === 0) {
          dispatch(CountData(9));
        } else {
          dispatch(CountData(count_data - 1));
        }
        break;
    }
  }

  return (
    <View style={styles.btn_box}>
      <TouchableOpacity
        onPress={() => {
          onPress('down');
        }}
        style={styles.btn}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          onPress('up');
        }}
        style={styles.btn}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Btn;
