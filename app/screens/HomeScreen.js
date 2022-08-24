import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import CustomCard from '../components/CustomCard';

const HomeScreen = () => {
  const [users, setUser] = useState([]);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://10.0.2.2:5000/users');
    setUser(response.data);
  };
  const getPosts = async () => {
    const response = await axios.get('http://10.0.2.2:5000/posts');
    setPost(response.data);
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{flex: 0.9}}>
          <CustomCard />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};
// }

export default HomeScreen;
