import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
//import base from './src/base';

import sampleItems from './src/temp-data/sample-fishes'; 

import {Root} from './src/components/routing/router';


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
        <Root screenProps={{items: this.state.items}}/>
     </View>
    );
  }
}

export default App;