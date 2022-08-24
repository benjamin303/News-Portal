import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import axios from 'axios';
import Moment from 'moment';
import localStorage from 'react-native-sync-localstorage';

const CustomCard = () => {
  const [posts, setPost] = useState([]);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get('http://10.0.2.2:5000/posts');
    setPost(response.data);
  };

  const navigation = useNavigation();

  const onSeeMorePress = post => {
    localStorage.setItem('postId', post._id);
    console.log(localStorage.getItem('postId'));
    navigation.navigate('CustomCardMoreScreen');
  };

  return (
    <>
      {posts.map(post => (
        <View key={post._id}>
          <Card>
            <Card.Content>
              <Title>{post.title}</Title>
            </Card.Content>
            <Card.Cover source={{uri: post.image}} />
            <Card.Actions>
              <Button onPress={() => onSeeMorePress(post)}>See more.</Button>
            </Card.Actions>
            <Card.Content>
              <Paragraph>
                {Moment(post.created_at).format('DD MMMM YYYY, H:mm')}
              </Paragraph>
            </Card.Content>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                paddingBottom: 15,
              }}
            />
          </Card>
        </View>
      ))}
    </>
  );
};

export default CustomCard;
