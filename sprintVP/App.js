import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthScreen from './src/pages/acesso/AuthScreen';
import Home from './src/pages/home/home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  
  if(!fontCarregada) {
    return (
      <View />
    );
  }


  return (

   <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
    }}>
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  );

};
