import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';

import List from '../../screens/InventoryList';
import BuyList from '../../screens/BuyList';
import ItemDetails from '../../screens/ItemDetails';
import AddItem from '../../screens/AddItem';
import BarcodeScanner from '../../screens/BarCodeScanner';

export const ItemStack = createStackNavigator({
  Inventory: {
    screen: List,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Inventory',
      headerRight: (
        <Button 
          title="New"
          titleStyle={{color:  'blue'}}
          clear
          onPress={() => navigation.navigate('New')}
        />
      ),
    }),
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
    screen: BuyList,
    navigationOptions: {
      tabBarLabel: 'Buy',
      title: 'Buy',
      tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>,
    }
  },
  Inventory: {
    screen: ItemStack,
    navigationOptions: {
      tabBarLabel: 'Inventory',
      tabBarIcon: ({tintColor}) => <Icon name="folder" type="entypo" size={35} color={tintColor}/>,
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

export const Root = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
  New: {
    screen: AddItem,
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});