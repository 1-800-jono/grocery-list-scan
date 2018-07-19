import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


export default class ItemDetails extends React.Component {
  
  render() {
    const { image, name, desc } = this.props.navigation.state.params;
    return (
      
      <View style={styles.itemContainer}>
        <Tile
          imageSrc={image}
          featured
        />
        <ListItem
            title="Name"
            rightTitle={name}
            hideChevron
          />
        {desc &&
          <ListItem
            title="Description"
            subtitle={desc}
            hideChevron
          /> 
        }    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    //backgroundColor: 'white',
    flex: 1
  },
  image: {
    marginBottom: 8,
    width: '100%',
    height: 200,
  }
});
