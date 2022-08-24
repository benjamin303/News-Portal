import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import smile from '../assets/images/smile.png'

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: '5%'}}>
          <View>
          <Text
              style={{
                color: 'rgb(59,108,212)',
                fontSize: 42,
                fontWeight: '100',
                textAlign: 'center',
                marginVertical: '10%'
              }}>About Me!</Text>
          </View>
          <Text style={{fontSize: 18}}>First of all, thank you for using my app.</Text>
          <Text style={{marginTop: 50, fontSize: 20}}>I created this app for the purpose of learning new knowledge.</Text>
          <Image
          style={{width: 200, height: 250, marginLeft: '23%', marginTop: 20, borderRadius: 30}}
          source={smile}
        />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default AboutScreen;
