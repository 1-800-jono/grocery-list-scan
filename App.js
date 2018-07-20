console.ignoredYellowBox = ['Remote debugger']; //Temp fix for annoying warning
import React, { Component } from 'react';
import { View, StatusBar, AsyncStorage } from 'react-native';
//import base from './src/base';

import sampleItems from './src/temp-data/sample-fishes'; 

import {Root} from './src/components/routing/router';


class App extends Component {

  state = {
    inventory: {},
    buyList: {},
    userID: 'jonathan'
  }

   componentDidMount() {
     this.getLocalStorage();
  }

  saveToLocal = (objName, obj) => {
    AsyncStorage.setItem(objName, JSON.stringify(obj))
    .then(console.log(AsyncStorage.getItem('inventory')))
  }

  getLocalStorage = async () => {

    try {
      let inventoryString = await AsyncStorage.getItem('inventory');
      let inventory = JSON.parse(inventoryString);
      let buyListString = await AsyncStorage.getItem('buyList');
      let buyList = JSON.parse(inventoryString);

      if (inventoryString) {
        this.setState({
          inventory: JSON.parse(inventoryString)
        })
      }

      if (buyListString) {
        this.setState({
          buyList: JSON.parse(buyListString)
        })
      }

    }
    catch(error) {
      console.log(error);
    }
  }

  addToBuyList = (key, item) => {
    const buyList = {...this.state.buyList}
    buyList[key] = item;
    this.setState({ buyList }, function() {
      this.saveToLocal('buyList', this.state.buyList);
    });  
  };

  addToInventory = (item) => {
    const inventory = {...this.state.inventory}
    inventory[item.name] = item;
    this.setState({ inventory }, function() {
      this.saveToLocal('inventory', this.state.inventory);
    }); 
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="dark-content"/>
        <Root 
          screenProps={{
            inventory: this.state.inventory,
            buyList: this.state.buyList,
            addToBuyList: this.addToBuyList,
            addToInventory: this.addToInventory
          }}
          />
     </View>
    );
  }
}

export default App;