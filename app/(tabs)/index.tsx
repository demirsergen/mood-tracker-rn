import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type HomeProps = {};

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text>Home Page</Text>
      <Link href="/settings">Settings</Link>
    </View>
  );
};

export default Home;
