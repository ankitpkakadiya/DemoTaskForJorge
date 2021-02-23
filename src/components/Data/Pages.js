import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import HomeTopTab from '../Header/header';

const Pages = ({title, navigation, icons}) => (
  <SafeAreaView style={styles.Container}>
    <View style={styles.Container}>
      <HomeTopTab
        icons={icons}
        onPress={() => {
          navigation.openDrawer();
        }}
        title={title}
      />
      <Text>{title}</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default Pages;
