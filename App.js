import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Top from './src/components/Top';
import List from './src/components/List';
import BarcodeScanner from './src/components/BarCodeScanner';
import AddItem from './src/components/AddItem';
import { Route } from 'react-router-native';
import sampleItems from './src/temp-data/sample-fishes'; 

import Tabs from './src/components/routing/router';


class App extends Component {

  state = {
    items: {}
  }

  componentWillMount() {
    this.setState({ items: sampleItems });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="blue" barStyle="light-content"/>
        
        <Tabs/>

      </View>
    );
  }
}

export default App;