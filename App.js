import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/native'
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {  
  const MainNavigator = createStackNavigator();

  return (
    <View>
      <NavigationContainer>
        <MainNavigator.Navigator initialRouteName="Login"  > 
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.screen name="Home" component={Home} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
