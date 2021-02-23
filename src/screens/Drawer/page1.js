/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {useSelector} from 'react-redux';
import HomeTopTab from '../../components/Header/header';
import {icons} from '../../helper/iconConstant';

const pageOne = ({navigation}) => {
  const {userData} = useSelector((state) => state.data);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const data = [];
    userData.map((item) => {
      const obj = {
        ...item,
        value: item.title,
        key: item.id,
      };
      data.push(obj);
    });
    setDataArray(data);
  }, [userData]);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Container}>
        <HomeTopTab
          icons={icons}
          onPress={() => {
            navigation.openDrawer();
          }}
          title="Page One"
        />
        <AlphabetList
          data={dataArray}
          indexLetterColor={'black'}
          showsVerticalScrollIndicator={false}
          renderCustomItem={(item) => (
            <View>
              <Text>{item.value}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default pageOne;
