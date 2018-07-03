import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation';


export default class Intro extends React.Component {
  
  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/1545577?s=460&v=4'
    };
    return (
      
      <View style={styles.container}>
        <Text style={styles.text}>Avatar</Text>
        <Image source={pic} style={{ width: '100%', height: 300 }} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  button: {
    backgroundColor: 'tomato',
    width: '100%'
  }
});
