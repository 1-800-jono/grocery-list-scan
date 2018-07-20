import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text} from 'react-native';
import ItemCard from '../components/ItemCard';


export default class InventoryList extends React.Component {

  onShowDetails = (item) => {
    this.props.navigation.navigate('ItemDetails', {...item})
  };
  
  render() {
    //Check to see if there's any items to display
    if (Object.keys(this.props.screenProps.inventory).length === 0) {
      return (
        <View style={styles.noItemContainer}>
          <Text style={styles.text}>Inventory Empty</Text>
          <Text style={styles.text}>😋</Text>
        </View>
      );
    } 
    return (
      <ScrollView style={styles.container}>
        {
          Object.keys(this.props.screenProps.inventory).map((key) => (
            <TouchableOpacity onPress={() => this.onShowDetails(this.props.screenProps.inventory[key])} key={key}>
             <ItemCard               
                item={this.props.screenProps.inventory[key]} 
                index={key}    
                addToBuyList={this.props.screenProps.addToBuyList}         
              />
           </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
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
  },
  text: {
    color: '#111',
    fontSize: 25
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } 
});
