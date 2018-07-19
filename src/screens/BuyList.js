import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import ItemCard from '../components/ItemCard';


export default class BuyList extends React.Component {

  onShowDetails = (item) => {
    //alert(item.name);
    this.props.navigation.navigate('ItemDetails', {...item})
  };
  
  render() {

    if (Object.keys(this.props.screenProps.buyList).length === 0) {
      return (
        <View style={styles.noItemContainer}>
          <Text style={styles.text}>Nothing to buy!</Text>
          <Text style={styles.text}>🎉</Text>
        </View>
      );
    } 

    return (
      <ScrollView style={styles.container}>
        {
          Object.keys(this.props.screenProps.buyList).map((key) => (
            <ItemCard               
              item={this.props.screenProps.buyList[key]} 
              index={key} 
              key={key}            
            />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
    backgroundColor: '#111',
    padding: 20
  },
  text: {
    color: '#111',
    fontSize: 25
  },
  button: {
    backgroundColor: 'tomato',
    width: '100%'
  },
  scroll: {
    height: '100%'
  },
  noItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
