import React from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Top extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Grocery List Scan</Text>
          <Link to='/additem'><Text style={styles.text}>+</Text></Link>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    backgroundColor: '#222',
    paddingTop: 30,
    paddingBottom: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  addButton: {
    color: '#fff',
    marginRight: 'auto',
  }

});
