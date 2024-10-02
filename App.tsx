import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Config from 'react-native-config';
import { HomeScreen } from './src/presentacion/views/home/Home';
import CustomDrawer from './src/presentacion/componentes/CustomDrawer';
import { InfoScreen } from './src/presentacion/views/info/Info';
import { InitialScreen } from './src/presentacion/views/initial/Initial';



export type RootStackParamList = {
  InitialScreen: undefined;
  HomeScreen: undefined,
  InfoScreen: undefined,
  ProfileInfoScreen: undefined,
}

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator<RootStackParamList>();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => (
          <CustomDrawer {...props} initialRouteName="HomeScreen" usaAvatarUser={true} nombreMostrar='Prueba' emailMostrar='email@gmail.com' />
        )}>
        <Drawer.Screen name="InitialScreen" component={InitialScreen} options={{ 
          headerShown: false,
          title: '',
          drawerItemStyle: { display: 'none' }
          }} />
        <Drawer.Screen name="HomeScreen"  component={HomeScreen} />
        <Drawer.Screen name="InfoScreen" component={InfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
