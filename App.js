import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import UserList from './screen/UserList'
import CreateUserScreen from './screen/CreateUserScreen'
import UserDetailScreen from './screen/UserDetailScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} options={{title:"User List"}}/>
        <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title:"Create a new user"}}/>
        <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title:"User Detail"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
