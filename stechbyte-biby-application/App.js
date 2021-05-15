import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

/*"Stack" contiene toda la navegación*/
const Stack = createStackNavigator()

import CodeScreen from "./screens/CodeScreen"
import CreateUserScreen from "./screens/CreateUserScreen"
import CreateBikeScreen from "./screens/CreateBikeScreen"


/*Función que contiene todas las pantallas*/
function MyStack(){
  return(
<Stack.Navigator>
  <Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/> 
  <Stack.Screen name="CreateBikeScreen" component={CreateBikeScreen}/>
  <Stack.Screen name="CodeScreen" component={CodeScreen}/> 
</Stack.Navigator>
  )
}

export default function App() {
  return (
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
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
