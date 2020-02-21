import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello from component</Text>
            </View>
        );
    }
}
export default MainScreen;