import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView } from "react-native";
import TodoList from "TodoList/src/components/TodoList";
import { getTodos } from "TodoList/src/data/todos"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        alignItems: 'center'
        // justifyContent: 'center',
    },
});
class MainScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        };
    };
    componentDidMount = () => {
        this.setState({ todos: getTodos() });
    }
    render() {
        const { todos } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable selectionColor="red" style={{ fontSize: 24, marginBottom: 25, fontWeight: "bold" }}>ToDo List App</Text>
                <TodoList todos={todos} />
            </SafeAreaView>
        );
    }
}
export default MainScreen;