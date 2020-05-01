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

const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    return newTodoList;
};

// Where each element from list id is different from the wanted to delete todo id
const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

const addTodo = (list, todo) => [...(list || []), newTodo({ text: todo.text, done: false })];
export { getTodos, addTodo, updateTodo, deleteTodo };