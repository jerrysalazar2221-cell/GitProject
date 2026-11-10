// Day 9 - Stopwatch-App
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Stopwatch App</Text>
        <Text style={styles.subtitle}>
          React Native Daily Project
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.description}>
          This is my Day 9 React Native project.
          Built using JavaScript and React Native.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 25,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    color: '#E3F2FD',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 25,
    borderRadius: 15,
    elevation: 3,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 23,
  },
});
