import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import List from '../../screens/List';
import ItemDetails from '../../screens/ItemDetails';
import BarcodeScanner from '../../screens/BarCodeScanner';

export const ItemStack = createStackNavigator({
  List: {
    screen: List,
    navigationOptions: {
      title: 'List',
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
  Buy: {
    screen: List,
    navigationOptions: {
      tabBarLabel: 'Buy',
      title: 'Buy',
      tabBarIcon: ({tintColor}) => <Icon name="local-grocery-store" type="material-icons" size={35} color={tintColor}/>,
    }
  },
  Inventory: {
    screen: ItemStack,
    navigationOptions: {
      tabBarLabel: 'Inventory',
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