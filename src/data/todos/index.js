import uuid from 'react-native-uuid';
import { AsyncStorage } from "react-native";

// For AsyncStorage
const TODOS_KEY = "@MyStore:todos";

const delay = ms => new Promise(res => setTimeout(res, ms));

const getTodos = async() => {
    let Todos = [];
    try {
        Todos = await AsyncStorage.getItem(TODOS_KEY);
    } catch (error) {
        // Error
        console.log(error.message);
    }
    return JSON.parse(Todos);
};
const newTodo = todo => ({
    id: uuid.v1(),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done,
    priority: todo.priority,
    description: todo.description
});

const updateTodo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    saveTodos(newTodoList);
    return newTodoList;
};

// Where each element from list id is different from the wanted to delete todo id
const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

const addTodo = (list, todo) => {
    const newTodoList = [...(list || []), newTodo({ text: todo.text, done: false, priority: todo.priority, description: todo.description })];
    saveTodos(newTodoList);
    return newTodoList;
};

const saveTodos = async List => {
    try {
        const resp = await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(List));
    } catch (error) {
        // Error
        console.log(error.message);
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo };