/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './components/Home';
import Item from './components/Item';
import { Provider } from "react-redux";
import store from "./redux/store.js";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();



function App(): JSX.Element {

  return (
    <>
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name="HOME" component={Home} />
       <Stack.Screen name="ITEM" component={Item} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}


export default App;
