import React, { Component } from "react";
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button} from "react-native";
import TodoList from "TodoList/src/components/TodoList";
import { getTodos, addTodo,updateTodo } from "TodoList/src/data/todos";

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
    };
    addTodoBtn = () => {
        const {todos, newTodo} = this.state;
        const newList = addTodo(todos, {text:newTodo});
        this.setState({todos:newList,newTodo: null});
    };
    handleUpdate = todo =>{
        const {todos} = this.state;
        const newList = updateTodo(todos,todo);
        this.setState({todos: newList});
    };
    render() {
        const { todos, newTodo } = this.state;
        return (
            /* SafeAreaView prevent notch problem on iOS */
            <SafeAreaView style={styles.container}>
                <Text selectable selectionColor="red" style={{ fontSize: 24, marginBottom: 25, fontWeight: "bold" }}>ToDo List App</Text>
                <View style={styles.inputTodo}>
                <TextInput value={newTodo} onChangeText={thingtodo=> this.setState({newTodo:thingtodo})} placeholder="Introduce una nueva tarea" autoCapitalize="sentences" style={styles.text} returnKeyType="done"/>
                <Button title="Añadir" onPress={this.addTodoBtn}/>
                </View>
                <TodoList todos={todos} onUpdate={this.handleUpdate} />
            </SafeAreaView>
        );
    }
}
export default MainScreen;