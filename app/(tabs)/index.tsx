import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GenericLink from '../../components/GenericLink';

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <SafeAreaProvider>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text>Home Page</Text>
        <GenericLink location="/settings" title="Settings" />
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
