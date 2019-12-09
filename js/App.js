import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppStackNavigator from './navigators/AppNavigators';
const AppContainer = createAppContainer(AppStackNavigator);

import {Provider} from 'react-redux';
import store from './store'

export default class App extends React.Component {
  render() {
    /**
     * 将store传递给App框架
     */
    return <Provider store={store}>
           <AppContainer />
     </Provider>
  }
}