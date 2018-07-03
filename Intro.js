import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card } from 'react-router-navigation';


export default class Intro extends React.Component {
  
  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/1545577?s=460&v=4'
    };
    return (
      <View style={styles.container}>
      
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
        <Text style={styles.text}>Hello World</Text>
        <Image source={pic} style={{ width: '100%', height: 300 }} />
        <View style={styles.button}>
          <Button 
          onPress={() => {
            alert('Touched the button!');
          }}
          title='Touch it'
          accessibilityLabel='Button to touch'
          color='#fff'
          />
        </View>          

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  button: {
    backgroundColor: 'tomato',
    width: '100%'
  },
  scroll: {
    height: '100%'
  }
});
