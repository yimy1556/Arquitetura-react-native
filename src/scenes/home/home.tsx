import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {authSelectors} from '_modules';

const Home = () => {
  const loading = useSelector(authSelectors.selectRaw);
  console.log(loading);

  return (
    <View>
      <Text>"Home"</Text>
    </View>
  );
};

export default Home;
