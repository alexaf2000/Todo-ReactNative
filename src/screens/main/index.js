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
  
const todos = [
    {text: "Thing 1",done: false},{text: "Thing 2",done: false},{text: "Thing 3",done: true},
]
class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ToDo List App</Text>
                {/* Using key as if was an id with something really unique, the array index is not safe at all, its for internal use */}
                {todos.map(todo=>(
                    // React usual way - IMPORTANT Look at the negation
                    !todo.done && <Text key={todo.text}>{todo.text}</Text>
                    //Usual programming way with if elese
                    //todo.done ? null : <Text key={todo.text}>{todo.text}</Text>
                ))}
            </View>
        );
    }
}
export default MainScreen;