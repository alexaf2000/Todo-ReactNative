import uuid from 'react-native-uuid';

const delay = ms => new Promise(res => setTimeout(res, ms));

const getTodos = async() => {
    await delay(2000);
    return [
        newTodo({ text: "Thing 1", done: false, priority: 2 }),
        newTodo({ text: "Thing 2", done: false, priority: 2 }),
        newTodo({ text: "Thing 3", done: true, priority: 2 })
    ];
};
const newTodo = todo => ({
    id: uuid.v1(),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done,
    priority: todo.priority
});

const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    return newTodoList;
};

// Where each element from list id is different from the wanted to delete todo id
const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

const addTodo = (list, todo) => [...(list || []), newTodo({ text: todo.text, done: false, priority: todo.priority })];
export { getTodos, addTodo, updateTodo, deleteTodo };