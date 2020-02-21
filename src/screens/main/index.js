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
                <Text>ToDo List App</Text>
                <Text>Tareas 1</Text>
                <Text selectable selectionColor="#008bef">Tarea 2 - This is selectable with custom color.</Text>
                <Text>Tarea 3 </Text>
            </View>
        );
    }
}
export default MainScreen;