import uuid from 'react-native-uuid';

const getTodos = () => [
    newTodo({ text: "Thing 1", done: false }),
    newTodo({ text: "Thing 2", done: false }),
    newTodo({ text: "Thing 3", done: true })
];
const newTodo = todo => ({
    id: uuid.v1(),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done
});
const addTodo = (list, todo) => [...(list || []), newTodo({ text: todo.text, done: false })];
export { getTodos, addTodo };