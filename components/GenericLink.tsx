import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

const GenericLink = (props) => {
  return (
    <View style={styles.linkContainer}>
      <Link href={props.location} style={styles.linkText}>
        {props.title}
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    backgroundColor: 'gray',
    color: 'red',
    padding: 10,
    borderRadius: 25,
  },
  linkText: {
    color: 'white',
  },
});

export default GenericLink;
