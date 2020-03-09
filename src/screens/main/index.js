import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput} from "react-native";
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
            todos: [],
            newTodo: null
        };
    };
    componentDidMount = () => {
        this.setState({ todos: getTodos() });
    }
    render() {
        const { todos,newTodo } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable selectionColor="red" style={{ fontSize: 24, marginBottom: 25, fontWeight: "bold" }}>ToDo List App</Text>
                <TextInput value={newTodo} onChangeText={thingtodo=> this.setState({newTodo:thingtodo})} placeholder="Introduce una nueva tarea" autoCapitalize="sentences" style={styles.text}/>
                <TodoList todos={todos} />
                <Text>{newTodo}</Text>
            </SafeAreaView>
        );
    }
}
export default MainScreen;