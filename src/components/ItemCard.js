import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Button } from 'react-native';
import {Avatar} from 'react-native-elements';


export default class ItemCard extends React.Component {
  
  render() {

    //While items load display a loading component
    if (!this.props.item) {
      return <ActivityIndicator animating={true} size="small" />
    } 
    
    //After items load display thhem
    const item = this.props.item;
    return (
      <View style={styles.itemContainer}>
       { item.image && 
        <Avatar
          size="large"
          rounded
          source={item.image}
        />
      }
        <View style={styles.info}>
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
    marginBottom: 10,
    height: 83,
    width: '100%',
    padding: 4,
    paddingBottom: 10,
  },
  text: {
    fontFamily: 'System',
    fontWeight: '100' ,
    fontSize: 18,
    marginTop: 3
  },
  info: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
