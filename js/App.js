import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppStackNavigator from './navigators/AppNavigators';
const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}