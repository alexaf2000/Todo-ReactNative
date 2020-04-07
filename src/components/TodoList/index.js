import React, { Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        padding: 2,
        margin: 2,
        width: "80%",
        flexDirection: "row"
    },
    text:{
        padding: 2,
        fontWeight: "bold"
    },
    textDone:{
        textDecorationLine: "line-through",
        fontWeight: "normal",
        color: '#aaa'
    }
})
// Adds onUpdate parameter from parent
const TodoList = ({ todos, onUpdate }) => (
    <Fragment>
        {todos.map(
            todo => (
                <TouchableOpacity key={todo.text} style={styles.listItem} onPress={() => onUpdate({...todo, done: !todo.done})}>
                    <Text style={[styles.text, todo.done && styles.textDone]}> - </Text>
                    <Text style={[styles.text, todo.done && styles.textDone]}>
                        {todo.text}
                    </Text>
                </TouchableOpacity>
            ))}
    </Fragment>
);
export default TodoList;
