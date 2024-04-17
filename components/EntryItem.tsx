import { View, Text, StyleSheet } from 'react-native';

const EntryItem = ({ entry }) => {
  return (
    <View style={styles.entryContainer}>
      <Text>
        <Text style={styles.title}>High:</Text> {entry.item.high}
      </Text>
      <Text>
        <Text style={styles.title}>Low:</Text> {entry.item.low}
      </Text>
      <Text>
        <Text style={styles.title}>Rating:</Text> {entry.item.rating}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entryContainer: {
    backgroundColor: '#CFFFCF',
    width: 400,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  title: {
    fontWeight: '700',
  },
});

export default EntryItem;
