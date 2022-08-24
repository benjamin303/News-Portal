import React, {useState} from 'react';
import {View, Alert, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import {useForm} from 'react-hook-form';

const control = {useForm};

const ContactScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    fetch('http://10.0.2.2:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert(
          'Successful',
          'The message will be read as soon as possible. Thank you.',
          [
            {
              text: 'Close',
              style: 'close',
            },
          ],
        );
        navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: '5%'}}>
          <Text
            style={{
              color: 'rgb(59,108,212)',
              fontSize: 42,
              fontWeight: '100',
              textAlign: 'center',
              marginTop: 20,
            }}>
            Contact Us!
          </Text>
          <Text style={{marginTop: 40, marginBottom: 20}}>
            You can contact us on this page and we will get back to you as soon
            as possible. Thank you.
          </Text>
          <TextInput
            label="Your name"
            style={styles.input}
            value={name}
            theme={theme}
            mode="outlined"
            onChangeText={text => setName(text)}
          />
          <TextInput
            label="Email"
            style={styles.input}
            value={email}
            theme={theme}
            mode="outlined"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Subject"
            style={styles.input}
            value={subject}
            theme={theme}
            mode="outlined"
            onChangeText={text => setSubject(text)}
          />
          <TextInput
            label="Message"
            style={styles.input}
            value={message}
            theme={theme}
            mode="outlined"
            onChangeText={text => setMessage(text)}
            multiline={true}
            numberOfLines={4}
          />
          <CustomButton text="Send" onPress={() => sendMessage()} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const theme = {
  colors: {
    primary: '#18a4e0',
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#ECF4F1',
    borderWidth: 1,
    borderRadius: 50,

    paddingHorizontal: 10,
    marginVertical: 100,
  },
  input: {},
});

export default ContactScreen;
