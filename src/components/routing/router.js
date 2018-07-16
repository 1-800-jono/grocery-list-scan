import React from 'react';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Intro from '../../../Intro';
import BarcodeScanner from '../BarCodeScanner';

export const Tabs = TabNavigator({
  List: {
    screen: Intro,
  },
  BarcodeScanner: {
    screen: BarcodeScanner,
  }
});