/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './app/source/index';
import { store } from './app/source/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppNavigator/>
      </Provider>
    );
  }
}
