import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useEntryStore from '../../store/entryStore';
import EntryItem from '../../components/EntryItem';

type HomeProps = {
  entry: object;
};

const Home: React.FunctionComponent<HomeProps> = ({}) => {
  const { entries } = useEntryStore();
  console.log(entries);
  return (
    <SafeAreaProvider>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#CFE1E5',
          padding: 10,
        }}
      >
        <Text>Home Page</Text>
        <View style={styles.entriesContainer}>
          <FlatList
            data={entries}
            renderItem={(entry) => <EntryItem entry={entry} />}
            keyExtractor={(entry) => entry.id}
            style={{ gap: 10 }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  entriesContainer: {},
});

export default Home;
