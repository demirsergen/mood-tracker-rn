import { View, Text, StyleSheet } from 'react-native';

const Entry = (props) => {
  return (
    <View>
      <Text>{props.high}</Text>
      <Text>{props.low}</Text>
      <Text>{props.rating}</Text>
    </View>
  );
};

export default Entry;
