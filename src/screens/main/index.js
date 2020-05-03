import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import TodoList from "TodoList/src/components/TodoList";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "TodoList/src/data/todos";
import AddTodo from "../../components/AddTodo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    alignItems: "center",
    // justifyContent: 'center',
  },
  inputTodo: {
    flexDirection: "row",
    width: "80%",
    marginBottom: 5,
  },
  text: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
  },
  loading: {
    flex: 1,
  },
});
class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: null,
      loading: true,
      addModalVisible: false,
    };
  }
  componentDidMount = async () => {
    this.setState({ todos: await getTodos(), loading: false });
  };
  handleAdd = (newTodo) => {
    const { todos } = this.state;
    const newList = addTodo(todos, newTodo);
    console.log(newTodo);
    this.setState({ todos: newList, newTodo: null });
  };
  handleUpdate = (todo) => {
    const { todos } = this.state;
    const newList = updateTodo(todos, todo);
    this.setState({ todos: newList });
  };
  handleDelete = (todo) => {
    Alert.alert(
      "Deseas eliminar la tarea?",
      "Se va a proceder con la eliminacion de la tarea.",
      [
        { text: "cancelar", style: "cancel" },
        {
          text: "eliminar",
          onPress: () => {
            const { todos } = this.state;
            const newList = deleteTodo(todos, todo);
            this.setState({ todos: newList });
          },
        },
      ]
    );
  };
  toggleModal = () => {
    this.setState({ addModalVisible: !this.state.addModalVisible });
  };
  render() {
    const { todos, newTodo, loading, addModalVisible } = this.state;
    return (
      /* SafeAreaView prevent notch problem on iOS */
      <SafeAreaView style={styles.container}>
        <Text
          selectable
          selectionColor="red"
          style={{ fontSize: 24, marginBottom: 25, fontWeight: "bold" }}
        >
          ToDo List App
        </Text>
        <View style={styles.inputTodo}>
          <Button title="Añadir" onPress={this.toggleModal} />
        </View>
        {/* in case of loading, then show the activity indicator */}
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#007bef"
          />
        )}
        {/* in case is not loading then show the list */}
        {!loading && (
          <TodoList
            todos={todos}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
          />
        )}
        <AddTodo
          visible={addModalVisible}
          onAddTodo={this.handleAdd}
          onCloseModal={this.toggleModal}
        />
      </SafeAreaView>
    );
  }
}
export default MainScreen;
