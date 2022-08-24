import React, {useState} from 'react';
import {View, Alert, StyleSheet, ScrollView, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import {useForm} from 'react-hook-form';

const control = {useForm};

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [title, setRecommendedTitle] = useState('');
  const [description, setRecommendedDescription] = useState('');

  const saveUser = () => {
    fetch('http://10.0.2.2:5000/recommendedPosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recommended_title: title,
        recommended_description: description,
      }),
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert(
          'Successful',
          'Thank you for your submission. The proposal will be reviewed and published as soon as possible.',
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
            Recommend Post
          </Text>
          <Text style={{marginTop: 40, marginBottom: 20}}>
            You can submit a recommendation for publication on this page. Please
            be specific in your entry and submit the intended title and
            description. All entries will be saved in the database and reviewed
            as soon as possible. Thank you.
          </Text>
          <TextInput
            label="Enter recommended title"
            style={styles.input}
            value={title}
            theme={theme}
            mode="outlined"
            onChangeText={text => setRecommendedTitle(text)}
          />
          <TextInput
            label="Enter detailed description"
            style={styles.input}
            value={description}
            theme={theme}
            mode="outlined"
            onChangeText={text => setRecommendedDescription(text)}
            multiline={true}
            numberOfLines={4}
          />
          <CustomButton
            text="Submit a Recommendation"
            onPress={() => saveUser()}
          />
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

export default CreatePostScreen;
