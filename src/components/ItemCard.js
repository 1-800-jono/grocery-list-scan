import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';


export default class ItemCard extends React.Component {
  
  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/1545577?s=460&v=4'
    };

    //const image = this.props.item.name;
    //console.log(this.props.item.name);
    if (!this.props.item) {
      return <ActivityIndicator animating={true} size="small" />
    } 
    
    //const img = require(this.props.item.image);
    
    return (
      <View style={styles.container}>
        <Image source={this.props.item.image} style={styles.image} />
        <Text style={styles.text}>{this.props.item.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'space-between',
    marginBottom: 10,
    width: '30%'
  },
  text: {
    color: '#fff'
  },
  image: {
    marginBottom: 8,
    width: '100%', 
    height: 100
  }
});
