import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {userData} from '../action/dataAction';

const Home = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.Container}>
      <Button
        title="Call API"
        onPress={() => {
          navigate('EntryScreen');
          dispatch(userData());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
