import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomButtonReverteColors from '../components/CustomButtonReverteColors';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import StyleSheet from '../Styles/Style';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const RegisterScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPress = () => {
    navigation.navigate('LoginScreen');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
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
        Create an account
      </Text>
      <View style={StyleSheet.root}>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text="Sign Up"
          onPress={handleSubmit(onRegisterPressed)}
        />

        <View style={{marginTop: '5%'}}>
          <Text style={StyleSheet.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={StyleSheet.link} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={StyleSheet.link} onPress={onPrivacyPressed}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <View style={StyleSheet.registerLogin}>
          <Text>Have an account? </Text>
          <Text onPress={onSignInPress} style={StyleSheet.textOnPress}>
            Sign In.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
