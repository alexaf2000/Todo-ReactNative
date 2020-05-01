import React, { Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10
    },
    listItem: {
        borderWidth: 1,
        padding: 2,
        margin: 2,
        width: "80%",
        flexDirection: "row"
    },
    text:{
        flex: 1,
        padding: 5,
        fontWeight: "bold"
    },
    bullet: {
        fontWeight: "bold",
        padding: 5
    },
    textDone:{
        textDecorationLine: "line-through",
        fontWeight: "normal",
        color: '#aaa'
    },
    deleteButton:{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteButtonText:{
        color: '#d92114',
        fontSize: 18
    }
})
// Adds onUpdate parameter from parent
const TodoList = ({ todos, onUpdate, onDelete }) => (
    <ScrollView  contentContainerStyle={styles.container}>
        {todos.map(
            todo => (
                <TouchableOpacity key={todo.text} style={styles.listItem} onPress={() => onUpdate({...todo, done: !todo.done})}>
                    <Text style={styles.bullet}> - </Text>
                    <Text style={[styles.text, todo.done && styles.textDone]}>
                        {todo.text}
                    </Text>
                    <TouchableHighlight style={styles.deleteButton}>
                        <Text style={styles.deleteButtonText} onPress={() => onDelete(todo)}>X</Text>
                    </TouchableHighlight>
                </TouchableOpacity>
            ))}
    </ScrollView>
);
export default TodoList;
