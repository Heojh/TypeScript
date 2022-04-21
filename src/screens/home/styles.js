import {StyleSheet, Dimensions} from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_box: {
    height: Height * 0.2,
    width: Width * 0.5,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    // backgroundColor: 'black',
  },
  view_text: {
    fontSize: 64,
    fontWeight: 'bold',
    // color: 'white',
  },
  btn_box: {
    height: Height * 0.05,
    width: Width * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
    lineHeight: 40,
  },
});
