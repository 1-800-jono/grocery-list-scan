import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';


export default class ItemCard extends React.Component {
  
  render() {

    //const image = this.props.item.name;
    //console.log(this.props.item.name);
    if (!this.props.item) {
      return <ActivityIndicator animating={true} size="small" />
    } 
    
    //const img = require(this.props.item.image);
    
    return (
      <View style={styles.itemContainer}>
        <Image source={this.props.item.image} style={styles.image} />
        <View>
          <Text style={styles.text}>{this.props.item.name}</Text>
          <View>
            <Text style={styles.text}>Quanity: 2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginBottom: 10,
    height: 83,
    width: '100%',
    backgroundColor: '#222',
    padding: 4,
    borderRadius: 5
  },
  text: {
    color: '#fff',
    fontFamily: 'System',
    fontWeight: '100' ,
    marginTop: 3
  },
  image: {
    marginBottom: 8,
    width: 75, 
    height: 75,
    marginRight: 8,
    borderRadius: 5,
  }
});
