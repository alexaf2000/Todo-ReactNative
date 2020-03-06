import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
const TodoList = ({ todos }) => (
    <Fragment>
        {todos.map(
            todo => (!todo.done && <Text style={{borderWidth:0.1,padding:2,margin:2}} key={todo.text}>{todo.text}</Text>
            ))}
    </Fragment>
);
export default TodoList;
