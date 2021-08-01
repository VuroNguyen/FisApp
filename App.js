/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './src/redux/reducers';
import MainDrawerScreen from './src/components/home/MainDrawer';
import RootStack from './src/RootStack';
import rootSaga from './src/redux/reducers/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    //  <NavigationContainer>
    //  <MainDrawerScreen/>
    //  </NavigationContainer>
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawerScreen />
      </NavigationContainer>
    </Provider>
  );
};

sagaMiddleware.run(rootSaga);
export default App;
