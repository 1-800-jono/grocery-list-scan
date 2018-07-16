import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { Navigation, Card, Tabs, Tab, BottomNavigation } from 'react-router-navigation';

import Top from './src/components/Top';
import List from './src/components/List';
import BarcodeScanner from './src/components/BarCodeScanner';
import AddItem from './src/components/AddItem';
import { Route } from 'react-router-native';
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
        
        <NativeRouter>
          <React.Fragment>
            <Top />
            <Route exact path="/additem" component={AddItem} />
            <BottomNavigation lazy={false} tabActiveTintColor="blue">
              <Tab label="List" exact path="/" render={() => (
                <List items={this.state.items}/>
              )}/>
              <Tab label="Scan" path="/barcodescanner" component={BarcodeScanner} />
            </BottomNavigation>
          </React.Fragment>
        </NativeRouter>

      </View>
    );
  }
}

export default App;