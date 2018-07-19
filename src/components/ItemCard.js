import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';


export default class ItemCard extends React.Component {
  
  render() {

    if (!this.props.item) {
      return <ActivityIndicator animating={true} size="small" />
    } 
    
    //const img = require(this.props.item.image);
    const item = this.props.item;
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.text}>{item.name}</Text>
          <View>
            <Button title="Add" onPress={() => this.props.addToBuyList(this.props.index, item)}/>
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
