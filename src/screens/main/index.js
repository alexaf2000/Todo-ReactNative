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
  
const todos = ["Thing 1", "Thing 2","Thing 3"]
class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ToDo List App</Text>
                {/* Using key as if was an id with something really unique, the array index is not safe at all, its for internal use */}
                {todos.map(todo=>(
                    <Text key={todo}>{todo}</Text>
                ))}
                <Text>{todos[0]}</Text>
                <Text selectable selectionColor="#008bef">{todos[1]} - This is selectable with custom color.</Text>
                <Text>{todos[2]}</Text>
            </View>
        );
    }
}
export default MainScreen;