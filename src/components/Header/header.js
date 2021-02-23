import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {hp, wp} from '../../helper/constants';

const HomeTopTab = ({icons, onPress, title}) => (
  <View style={styles.headerStyle}>
    <View style={styles.buttonContainer}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          source={icons.menu}
          style={styles.imgStyle}
          resizeMode={'contain'}
        />
      </TouchableWithoutFeedback>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerStyle: {
    height: hp(6),
    width: wp(100),
    marginHorizontal: wp(2),
    alignContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: wp(10),
  },
  imgStyle: {
    height: 30,
    width: 30,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default HomeTopTab;
