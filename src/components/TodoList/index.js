import React, { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1
  },
  listItem: {
    padding: 5,
    margin: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontWeight: "bold",
  },
  bullet: {
    width: "10%"
  },
  textDone: {
    textDecorationLine: "line-through",
    fontWeight: "normal",
    color: "#aaa",
  },
  deleteButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#d92114",
    fontSize: 18,
  },
});
// Adds onUpdate parameter from parent
const TodoList = ({ todos, onUpdate, onDelete }) => {
  const renderItem = (todo) => (
    <TouchableOpacity
      key={todo.text}
      style={styles.listItem}
      onPress={() => onUpdate({ ...todo, done: !todo.done })}
    >
      <Text style={styles.bullet}> - </Text>
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
      <TouchableHighlight style={styles.deleteButton}>
        <Text style={styles.deleteButtonText} onPress={() => onDelete(todo)}>
          X
        </Text>
      </TouchableHighlight>
    </TouchableOpacity>
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={({ item }) => renderItem(item)}
    ></FlatList>
  );
};
export default TodoList;
