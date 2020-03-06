import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        padding: 2,
        margin: 2,
        width: "80%"
    },
    text:{
        padding: 2,
        fontWeight: "bold"
    }
})
const TodoList = ({ todos }) => (
    <Fragment>
        {todos.map(
            todo => (!todo.done &&
                <View key={todo.text} style={styles.listItem}>
                    <Text style={styles.text}>
                        {todo.text}
                    </Text>
                </View>
            ))}
    </Fragment>
);
export default TodoList;
