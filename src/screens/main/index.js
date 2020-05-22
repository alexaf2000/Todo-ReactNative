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
import FAB from "TodoList/src/components/FAB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
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
    console.log(todo);
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
  openEditTodo = todo => {
    this.props.navigation.navigate("Edit",{todo, onSave: this.handleUpdate}); // Envia como parametro el objeto todo presionado
  };
  toggleModal = () => {
    this.setState({ addModalVisible: !this.state.addModalVisible });
  };
  render() {
    // Here we change the router navigation properties
    const navigation = this.props.navigation;
    navigation.setOptions({
      title: "TodoList!",
    });

    const { todos, newTodo, loading, addModalVisible } = this.state;
    return (
      /* SafeAreaView prevent notch problem on iOS */
      <SafeAreaView style={styles.container}>
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
            onEdit={this.openEditTodo}
          />
        )}
        <AddTodo
          visible={addModalVisible}
          onAddTodo={this.handleAdd}
          onCloseModal={this.toggleModal}
        />
        <FAB
          text="+"
          fabStyle={{ backgroundColor: "#007bef" }}
          textStyle={{ color: "#fff" }}
          onPress={this.toggleModal}
        />
      </SafeAreaView>
    );
  }
}
export default MainScreen;
