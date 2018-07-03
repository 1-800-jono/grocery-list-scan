import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

const Router = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </NativeRouter>
);