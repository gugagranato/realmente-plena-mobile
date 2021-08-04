import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AppProvider from './src/hooks';

export default function App() {
  return (
<SafeAreaProvider>
  <NavigationContainer>
    <AppProvider>
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar style='dark' />
        <Routes />
      </SafeAreaView>
    </AppProvider>
  </NavigationContainer>
</SafeAreaProvider>
  );
}
