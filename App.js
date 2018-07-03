import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card, Tabs, Tab, BottomNavigation } from 'react-router-navigation';

import Top from './src/components/Top';
import List from './src/components/List';
import BarcodeScanner from './src/components/BarCodeScanner';

import sampleItems from './src/temp-data/sample-fishes'; 


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
        <Top />
        <NativeRouter>
          <BottomNavigation lazy={false} tabActiveTintColor="blue">
            <Tab label="List" path="/" render={() => (
              <List items={this.state.items}/>
            )}/>
            <Tab label="Scan" path="/barcodescanner" component={BarcodeScanner} />
          </BottomNavigation>
        </NativeRouter>
      </View>
    );
  }
}

export default App;