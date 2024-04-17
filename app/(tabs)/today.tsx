import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';

const Today = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>How was your day?</Text>
        <Formik
          initialValues={{
            high: '',
            low: '',
            rating: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.formContainer}>
              <TextInput
                onChangeText={handleChange('high')}
                onBlur={handleBlur('high')}
                value={values.high}
                placeholder="Highest point of your day?"
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
              />
              <TextInput
                onChangeText={handleChange('low')}
                onBlur={handleBlur('low')}
                value={values.low}
                placeholder="Lowest point of your day?"
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
              />
              <TextInput
                onChangeText={handleChange('rating')}
                onBlur={handleBlur('rating')}
                value={values.rating}
                placeholder="Overall Rating:"
                keyboardType="numeric"
                style={styles.textInput}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  },
  title: {
    fontSize: '32px',
  },

  formContainer: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
  },

  textInput: {
    backgroundColor: '#f0f',
    width: 400,
    padding: 10,
    borderRadius: 10,
    fontSize: 24,
    color: '#fffff',
  },
});
