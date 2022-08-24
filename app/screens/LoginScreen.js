import React, {useState} from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  Text,
  Button,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import StyleSheet from '../Styles/Style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text
        style={{
          marginTop: '15%',
          marginBottom: '5%',
          marginLeft: '5%',
          fontSize: 40,
          fontWeight: 'bold',
          color: '#18A4E0',
        }}>
        Sign In
      </Text>
      <View style={StyleSheet.root}>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <CustomButton text="Login" onPress={handleSubmit(onSignInPressed)} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
