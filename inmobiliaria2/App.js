// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Main, Details} from "./src/screens"
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Detalles" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

