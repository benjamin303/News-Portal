import * as React from 'react';
import {Text, View, Image} from 'react-native';
import StyleSheet from '../Styles/Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const homeIcon = <Icon name="home" size={30} color="#18A4E0" />;
  const profileIcon = <Icon name="user" size={30} color="#18A4E0" />;
  const createPostIcon = <Icon name="plus-circle" size={30} color="#18A4E0" />;
  const contactIcon = <Icon name="at" size={30} color="#18A4E0" />;

  const onHomeIconPress = () => {
    navigation.navigate('HomeScreen');
  };
  const onCreatePostIconPress = () => {
    navigation.navigate('CreatePostScreen');
  };
  const onProfileIconPress = () => {
    navigation.navigate('AboutScreen');
  };
  const onContactIconPress = () => {
    navigation.navigate('ContactScreen');
  };

  return (
    <>
      {/* <View style={{flex: 1}}> */}
      <View style={StyleSheet.footer}>
        <View style={{flexDirection: 'row'}}>
          <Text onPress={onHomeIconPress} style={{marginRight: '14%'}}>
            {homeIcon}
          </Text>
          <Text onPress={onCreatePostIconPress} style={{marginRight: '7%'}}>
            {createPostIcon}
          </Text>
          <Text onPress={onProfileIconPress} style={{marginLeft: '7%'}}>
            {profileIcon}
          </Text>
          <Text onPress={onContactIconPress} style={{marginLeft: '14%'}}>
            {contactIcon}
          </Text>
        </View>
      </View>
      {/* </View> */}
    </>
  );
};
export default Footer;
