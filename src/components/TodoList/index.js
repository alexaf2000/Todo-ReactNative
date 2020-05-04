import React, { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SectionList,
  Image,
} from "react-native";
import deleteImage from "TodoList/assets/delete.png"; // As the image will appear to many times is better import it before use it
import CheckBox from "react-native-check-box";
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
  },
  listItem: {
    padding: 5,
    margin: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontWeight: "bold",
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
  deleteImage: {
    width: 20,
    height: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
    width: "86%",
    marginLeft: "14%",
  },
  emptyList: {
    flex: 1,
    justifyContent: "center", // Vertically
    alignItems: "center", // Horizontally
  },
  emptyImage: {
    width: 50,
    height: 50,
    tintColor: "#005500",
  },
  sectionHeader: {
    backgroundColor: "#ddd",
    padding: 10,
  },
});
// Adds onUpdate parameter from parent
const TodoList = ({ todos, onUpdate, onDelete }) => {
  // Important to add those methods inside this TodoList
  const renderItem = (todo) => (
    <TouchableOpacity key={todo.text} style={styles.listItem}>
      <CheckBox
        style={{ padding: 10 }}
        checkedCheckBoxColor="#007bef"
        onClick={() => onUpdate({ ...todo, done: !todo.done })}
        isChecked={todo.done}
      />
      <Text style={[styles.text, todo.done && styles.textDone]}>
        {todo.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(todo)}
      >
        <Image source={deleteImage} style={styles.deleteImage}></Image>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  const renderSeparator = () => <View style={styles.separator} />;

  const renderEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Image
        style={styles.emptyImage}
        source={require("TodoList/assets/check.png")}
      />
      <Text>Tu lista esta vacia, empieza por añadir notas!</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title, data } }) => (
    <View style={styles.sectionHeader}>
      <Text>
        {title} ({data.length})
      </Text>
    </View>
  );

  return (
    <SectionList
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      sections={
        todos && todos.length
          ? [
              {
                title: "Tareas",
                data: todos
                  .filter((todo) => todo.done != true)
                  .sort(
                    (a, b) =>
                      a.priority > b.priority
                        ? 1 // if true
                        : b.priority > a.priority //else if...
                        ? -1 // if true
                        : 0 //else
                  ),
              },
              {
                title: "Terminadas",
                data: todos.filter((todo) => todo.done == true),
              },
            ]
          : []
      } // If is view is not empty
      keyExtractor={(todo) => todo.id}
      renderItem={({ item }) => renderItem(item)}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled={true}
    ></SectionList>
  );
};
export default TodoList;
