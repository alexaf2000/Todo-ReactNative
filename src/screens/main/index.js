import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button} from "react-native";
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
    inputTodo:{
        flexDirection: "row",
        width: "80%",
        marginBottom: 5
    },
    text:{
        flex: 1,
        borderBottomWidth: 1
    }
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
    addTodo = () => {
        
    }
    render() {
        const { todos,newTodo } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable selectionColor="red" style={{ fontSize: 24, marginBottom: 25, fontWeight: "bold" }}>ToDo List App</Text>
                <View style={styles.inputTodo}>
                <TextInput value={newTodo} onChangeText={thingtodo=> this.setState({newTodo:thingtodo})} placeholder="Introduce una nueva tarea" autoCapitalize="sentences" style={styles.text} returnKeyType="done"/>
                <Button title="Añadir" onPress={this.addTodo}/>
                </View>
                <TodoList todos={todos} />
                <Text>{newTodo}</Text>
            </SafeAreaView>
        );
    }
}
export default MainScreen;