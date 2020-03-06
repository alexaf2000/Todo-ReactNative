import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoList from "TodoList/src/components/TodoList";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { text: "Thing 1", done: false },
                { text: "Thing 2", done: false },
                { text: "Thing 3", done: true }
            ]
        };
    };
    render() {
        const { todos } = this.state;
        return (
            <View style={styles.container}>
                <Text selectable selectionColor="red">ToDo List App</Text>
                <TodoList todos={todos} />
            </View>
        );
    }
}
export default MainScreen;