import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ItemCard from './ItemCard';


export default class Top extends React.Component {
  
  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/1545577?s=460&v=4'
    };
    return (
      <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Grocery List Scan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 65,
    width: '100%',
    backgroundColor: '#000',
    paddingTop: 30,
    paddingBottom: 10,
    //marginTop: 20
  },
  textContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    alignItems: 'center',
  },
  text: {
    color: '#fff'
  },

});
