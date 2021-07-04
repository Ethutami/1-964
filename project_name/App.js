import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './src/Redux';

import HomePage from './src/page/HomePage/Index';


export function MainTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
    </Tab.Navigator>
  )
}


const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer >
          <Stack.Navigator headerMode={false}>
            <Stack.Screen name="MainTab" component={MainTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
   
  );
};

const styles = StyleSheet.create({
 
});

export default App;
