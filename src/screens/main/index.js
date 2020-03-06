import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoList from "TodoList/src/components/TodoList";
import { getTodos } from "TodoList/src/data/todos"

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
            todos: []
        };
    };
    componentDidMount = () => {
        this.setState({ todos: getTodos() });
    }
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