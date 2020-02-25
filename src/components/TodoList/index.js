import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
const TodoList = ({ todos }) => (
    <Fragment>
        {todos.map(
            todo => (!todo.done && <Text key={todo.text}>{todo.text}</Text>
        ))};
         <Text>{todos[0].text}</Text>
    </Fragment>
);
export default TodoList;