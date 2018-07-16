import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class AddItem extends React.Component {
  
  render() {
    
    return (
      <View style={styles.itemContainer}>
        
        <View>
          <Text style={styles.text}>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    
  }
});
