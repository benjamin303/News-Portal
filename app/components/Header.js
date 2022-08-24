import * as React from 'react';
import {Text, View} from 'react-native';
import StyleSheet from '../Styles/Style';

const Header = () => {
  return (
    <View style={StyleSheet.header}>
      <>
        <Text style={StyleSheet.headerTitle}>News Portal</Text>
      </>
    </View>
  );
};
export default Header;
