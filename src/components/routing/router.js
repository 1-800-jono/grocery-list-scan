import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import List from '../List';
import ItemDetails from '../ItemDetails';
import BarcodeScanner from '../BarCodeScanner';

export const ItemStack = createStackNavigator({
  List: {
    screen: List,
    navigationOptions: {
      title: 'List'
    },
  },
  ItemDetails: {
    screen: ItemDetails,
    navigationOptions:  ({navigation}) => ({
        title: `${navigation.state.params.name}`
      })
  }
});

export const Tabs = createBottomTabNavigator({
  List: {
    screen: ItemStack,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>,
    }
  },
  BarcodeScanner: {
    screen: BarcodeScanner,
    navigationOptions: {
      tabBarLabel: 'Barcode',
      tabBarIcon: ({tintColor}) => <Icon name="barcode-scan" type="material-community" size={35} color={tintColor}/>,
    }
  }
});