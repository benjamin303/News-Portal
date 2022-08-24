import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Moment from 'moment';
import localStorage from 'react-native-sync-localstorage';

const myIcon = <Icon name="long-arrow-left" size={30} color="#18A4E0" />;

const CustomCardMore = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get(
      'http://10.0.2.2:5000/posts/' + localStorage.getItem('postId'),
    );
    setPost(response.data);
  };

  const onPressBack = () => {
    localStorage.removeItem('postId');
    navigation.navigate('HomeScreen');
  };
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <Text onPress={onPressBack} style={{margin: '5%'}}>
          {myIcon}
        </Text>
      </View>

      <Card style={{backgroundColor: 'white'}} key={post._id}>
        <Card.Title title={post.title} />
        <Card.Content>
          <Paragraph>{post.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: post.image}} />
        <Card.Content>
          <Paragraph>
            Created at: {Moment(post.created_at).format('DD MMMM YYYY, H:mm')}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CustomCardMore;
