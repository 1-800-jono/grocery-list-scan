console.ignoredYellowBox = ['Remote debugger']; //Temp fix for annoying warning
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
//import base from './src/base';

import sampleItems from './src/temp-data/sample-fishes'; 

import {Root} from './src/components/routing/router';


class App extends Component {

  state = {
    inventory: {},
    buyList: {}
  }

  componentWillMount() {
    this.setState({ inventory: sampleItems });
  }

  addToBuyList = (key, item) => {
    const buyList = {...this.state.buyList}
    buyList[key] = item;
    this.setState({ buyList });
  };

  addToInventory = (item) => {
    const inventory = {...this.state.inventory}
    inventory[item.name] = item;
    this.setState({ inventory});
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