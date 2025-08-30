import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Post() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
            <Text>This is one post</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
});
