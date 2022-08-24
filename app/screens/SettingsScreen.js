import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                color: 'rgb(59,108,212)',
                fontSize: 42,
                fontWeight: '100',
                textAlign: 'center',
              }}>
              Settings Screen
            </Text>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default SettingsScreen;
