import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ItemCard from '../components/ItemCard';


export default class InventoryList extends React.Component {

  onShowDetails = (item) => {
    this.props.navigation.navigate('ItemDetails', {...item})
  };
  
  render() {
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
  }
});
