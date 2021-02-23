import React from 'react';
import {View, StyleSheet} from 'react-native';
import Pages from '../../components/Data/Pages';
import {icons} from '../../helper/iconConstant';

const pageTwo = ({navigation}) => (
  <View style={styles.Container}>
    <Pages title="Page Two" navigation={navigation} icons={icons} />
  </View>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default pageTwo;
